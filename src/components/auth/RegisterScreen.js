import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";

import { errorMsgForm, removeErrorMsgForm } from "../../actions/ui";
import { newRegister } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { loading } = state.ui;
  const [handlerInputForm, stateValues] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  //const [stateErrorForm, setErrorForm] = useState(true); //hook para manejar el error visualizando el div
  //const [stateErrorMessage, setErrorMessage] = useState(""); //hook para manejar el error visualizando el mensaje

  const { name, email, password, password2 } = stateValues;

  const handleForm = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(newRegister(name, email, password));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(errorMsgForm("El nombre es requerido"));
      Swal.fire("ERROR", "El nombre es requerido", "error");

      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(errorMsgForm("Email invalido"));
      Swal.fire("ERROR", "Email invalido", "error");

      return false;
    } else if (password.length < 5 || password !== password2) {
      dispatch(
        errorMsgForm("El password no coincide o es menor a 5 caracteres")
      );
      Swal.fire(
        "ERROR",
        "El password no coincide o es menor a 5 caracteres",
        "error"
      );

      return false;
    }
    dispatch(removeErrorMsgForm());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Registro</h3>

      <form onSubmit={handleForm} className="animate__animated animate__fadeIn">
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={handlerInputForm}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handlerInputForm}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlerInputForm}
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Confirmar password"
          name="password2"
          value={password2}
          onChange={handlerInputForm}
          className="auth__input"
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          disabled={loading}
        >
          Registro
        </button>

        <Link to="/auth/login" className="link">
          ¿Ya estás registrado?
        </Link>
      </form>
    </>
  );
};
