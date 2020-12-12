import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const snapNotes = await db
    .collection(`${uid}/journal/notes`)
    .orderBy("date", "desc")
    .get();

  const notes = [];

  snapNotes.forEach((snapHijo) => {
    notes.push({ id: snapHijo.id, ...snapHijo.data() });
  });

  return notes;
};
