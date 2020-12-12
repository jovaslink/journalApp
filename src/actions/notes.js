import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUp } from "../helpers/fileUp";
export const newNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(docRef.id, newNote));
    dispatch(notesAdd(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: { id, ...note },
  };
};

export const loadNotesAction = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

export const loadNotesStart = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(loadNotesAction(notes));
  };
};

export const updateNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const id = note.id;
    delete note.id;
    if (!note.url) {
      delete note.url;
    }
    await db.doc(`${uid}/journal/notes/${id}`).update(note);

    dispatch(updateNoteRefresh(id, note));

    Swal.fire("Saved", note.title, "success");
  };
};

export const updateNoteRefresh = (id, noteActive) => {
  return {
    type: types.notesUpdate,
    payload: { id, active: { id, ...noteActive }, note: { id, ...noteActive } },
  };
};

export const fileUpload = (file) => {
  return async (dispatch, getState) => {
    Swal.fire({
      title: "Uploading...",
      text: "Wait a moment...",
      allowOutsideClick: false,
      showConfirmButton: false,

      willOpen: () => {
        Swal.showLoading();
      },
    });

    const fileURL = await fileUp(file);

    const note = getState().notes.active;

    const noteComplete = { ...note, url: fileURL };

    dispatch(updateNote(noteComplete));

    Swal.close();
  };
};

export const startDelete = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(noteDelete(id));
    Swal.fire("Deleted", "Note deleted", "success");
  };
};

export const noteDelete = (id) => ({ type: types.notesDelete, payload: id });

export const LogoutCleaning = () => ({
  type: types.notesLogoutCleaning,
});

export const notesAdd = (id, note) => ({
  type: types.notesAddNew,
  payload: { id, ...note },
});
