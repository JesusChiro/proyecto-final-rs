import { useState } from "react";
import { postLogin } from "../services/authServices";
import { Navigate, NavLink } from "react-router-dom";
import '../styles/login.css';


export const Login = () => {

 const [form, setForm] = useState({
    email: "admin@mail.com",
    password: "admin",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(form).then((data) => {
      if (txtemail.length === 0 || txtpass.length === 0) {
        alert("Complete Los Datos Faltantes!!");
        console.log(data);
      } else {
        if (data.content) {
          // Guardar usuario
          localStorage.setItem("email", JSON.stringify(form.email));
          localStorage.setItem("token", JSON.stringify(data.content));
          return <Navigate to="./InterUsu" />;
        }
      }
    });
  };
  return (
    <main className="login">
      <div className="login__form">
        <h1>Inicio de Sesión</h1>
        <form className="formulario" onSubmit={handleSubmit} id="form_login">
          <label htmlFor="">Email:</label>
          <input
            name="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            type="text"
            className="formulario__input"
            placeholder="Email"
            id="txtemail"
          />
          <label htmlFor="">Password:</label>
          <input
            name="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
            type="password"
            className="formulario__input"
            placeholder="Password"
            id="txtpass"
          />
          <button className="formulario__submit" type="submit">
            Iniciar Sesión
            {/* <InterUsu/> */}
          </button>
        </form>
      </div>
    </main>
  );
}

