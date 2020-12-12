import React, { useRef, useEffect } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote } from "../../actions/notes";

export const NoteScreen = () => {
  const { active: note, active } = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  const url = active.url;

  const [handlerInputForm, stateValues, reset] = useForm(note);

  const { title, body } = stateValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(stateValues.id, { ...stateValues }));
  }, [stateValues, dispatch]);

  return (
    <div className="notes__main-content animate__animated animate__fadeIn">
      {url && (
        <div
          className="notes__image"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Inicia con un título"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handlerInputForm}
        />

        <textarea
          placeholder="Escribe algo..."
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handlerInputForm}
        ></textarea>
      </div>
    </div>
  );
};
