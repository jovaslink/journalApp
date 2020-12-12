import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { loginEmailPassword, startGoogle } from "../../actions/auth";

export const LoginScreen = () => {
  //hook de react redux que dispara acciones la reducer
  const dispatch = useDispatch();
  //hook de react redux para acceder al state
  const state = useSelector((state) => state);

  const { loading } = state.ui;
  //hook personalizado que maneja el formulario, enviamos nombres de los campos e inicializacion
  const [handlerInputForm, stateValues] = useForm({
    email: "jovaslink@hotmail.com",
    password: "123456",
  });
  //destructuracion del objeto statevalues, viene del hook useForm
  const { email, password } = stateValues;

  //manejamos el envio del formulario y activamos el dispatch
  const handlerForm = (e) => {
    e.preventDefault();
    //login es una accion declarada en actions auth, regresa type(tipo de accion) y payload(datos a cargar)
    dispatch(loginEmailPassword(email, password));
  };
  const handlerGoogleAuth = () => {
    dispatch(startGoogle());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form
        onSubmit={handlerForm}
        className="animate__animated animate__fadeIn"
      >
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          className="auth__input"
          autoComplete="off"
          onChange={handlerInputForm}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handlerInputForm}
          className="auth__input"
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>

        <div className="auth__social-networks" onClick={handlerGoogleAuth}>
          <p>Login con redes sociales</p>

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in con google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Crear nueva cuenta
        </Link>
      </form>
    </>
  );
};
