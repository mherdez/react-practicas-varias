import { useState } from 'react';

export const Formulario = () => {
  const [usuario, setUsuario] = useState({});

  const enviarDatos = (e) => {
    e.preventDefault();
    const usuarioNuevo = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      genero: e.target.genero.value,
      bio: e.target.bio.value,
    };
    setUsuario(usuarioNuevo);
  };

  const cambarDatos = (e) => {
    // let usuarioNuevo = { ...usuario };
    // usuarioNuevo[e.target.name] = e.target.value;
    // setUsuario(usuarioNuevo);
    setUsuario((user) => ({ ...user, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h4>
        {usuario.nombre} {usuario.apellido} {usuario.genero} {usuario.bio}
      </h4>
      <form onSubmit={enviarDatos}>
        <input
          type='text'
          placeholder='Nombre'
          name='nombre'
          onChange={cambarDatos}
        />
        <input
          type='text'
          placeholder='Apellido'
          name='apellido'
          onChange={cambarDatos}
        />
        <select name='genero' onChange={cambarDatos}>
          <option value='hombre'>Hombre</option>
          <option value='mujer'>Mujer</option>
        </select>
        <input
          type='textarea'
          placeholder='Biografía.'
          name='bio'
          onChange={cambarDatos}
        />
        <button type='submit' name='enviar' value='enviar'>
          Enviar
        </button>
      </form>
    </div>
  );
};
