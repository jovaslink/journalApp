import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();

  const dateNow = moment(date);
  const handleNoteActive = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };

  return (
    <div
      className="journal__entry pointer animate__animated animate__fadeIn"
      onClick={handleNoteActive}
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__card">
        <div className="journal__entry-body">
          <p className="journal__entry-title">{title}</p>
          <p className="journal__entry-content">{body}</p>
        </div>

        <div className="journal__entry-date-box">
          <span>{dateNow.format("DD")}</span>
          <h5>{dateNow.format("MMM")}</h5>
          <h4>{dateNow.format("YYYY")}</h4>
        </div>
      </div>
    </div>
  );
};
