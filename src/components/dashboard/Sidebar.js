import React from "react";
import { JournalEntries } from "./JournalEntries";
import { useDispatch, useSelector } from "react-redux";
import { StartLogout } from "../../actions/auth";
import { newNote } from "../../actions/notes";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { name } = auth;

  const handleLogout = () => {
    dispatch(StartLogout());
  };

  const handleNewNote = () => {
    dispatch(newNote());
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="fas fa-code"></i>

          <span> {name}</span>
        </h3>

        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry" onClick={handleNewNote}>
        <i className="fas fa-robot fa-5x"></i>

        <p className="mt-5">Nueva entrada</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
