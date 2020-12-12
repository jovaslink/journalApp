import React from "react";
import moment from "moment";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, fileUpload, startDelete } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { date, id } = useSelector((state) => state.notes.active);
  const { active } = useSelector((state) => state.notes);

  const dateNow = moment(date);

  const handleSave = () => {
    dispatch(updateNote(active));
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    file && dispatch(fileUpload(file));
  };
  const handleImage = () => {
    document.querySelector("#fileselector").click();
  };

  const handleDelete = () => {
    dispatch(startDelete(id));
  };
  const handleDeleteSwal = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
  };

  return (
    <div className="notes__appbar">
      <span>
        {dateNow.format("DD")} {dateNow.format("MMM")} {dateNow.format("YYYY")}
      </span>

      <input
        type="file"
        style={{ display: "none" }}
        id="fileselector"
        name="file"
        onChange={handleFile}
      />

      <div>
        <button className="btn" onClick={handleImage}>
          Imagen
        </button>

        <button onClick={handleSave} className="btn">
          Guardar
        </button>

        <button onClick={handleDeleteSwal} className="btn">
          Borrar
        </button>
      </div>
    </div>
  );
};
