import React from 'react'
import '../styles/login.css';

export const RegisterPages = () => {
    return (

        <main className="login">
            <div className="login__form">
                <h1>Registro de Usuario</h1>
                <form className="formulario"/*onSubmit={handleSubmit}*/ id="form_login">
                    <label htmlFor="">Nombre:</label>
                    <input
                        name="email"
                        // onChange={(e) => setForm({ ...form, email: e.target.value })}
                        // value={form.email}
                        type="text"
                        className="formulario__input"
                        placeholder="Nombre"
                        id="txtemail"
                    />
                    <label htmlFor="">Email:</label>
                    <input
                        name="email"
                        // onChange={(e) => setForm({ ...form, email: e.target.value })}
                        // value={form.email}
                        type="text"
                        className="formulario__input"
                        placeholder="Email"
                        id="txtemail"
                    />
                    <label htmlFor="">Password:</label>
                    <input
                        name="password"
                        // onChange={(e) => setForm({ ...form, password: e.target.value })}
                        // value={form.password}
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
    )
}
