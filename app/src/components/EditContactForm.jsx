import React, { useState } from 'react';

const EditContactForm = ({ contact, updateContact, closeModal }) => {
  const [name, setName] = useState(contact.name); // Estado para el nombre
  const [apellido, setApellido] = useState(contact.apellido); // Estado para el apellido
  const [phone, setPhone] = useState(contact.phone); // Estado para el teléfono
  const [domicilio, setDomicilio] = useState(contact.domicilio); // Estado para el domicilio
  const [localidad, setLocalidad] = useState(contact.localidad); // Estado para la localidad
  const [pais, setPais] = useState(contact.pais); // Estado para el país
  const [especialidad, setEspecialidad] = useState(contact.especialidad); // Estado para la especialidad

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario al enviar
    if (!name || !phone) return; // Validamos que tanto el nombre como el teléfono no estén vacíos
    updateContact({ id: contact.id, name, phone }); // Llamamos a la función updateContact pasando el contacto actualizado
    closeModal(); // Cerramos el modal de edición
  };


  return (
    <div className='contenedor-edicion'>
    <div className="modal">
    <p><h2>Edicion de Contactos</h2></p>
      <form className='formulario-edicion' onSubmit={handleSubmit}>
        
      <table className='tabla-edicion'>
                <tbody>
                    <tr>
                        <td>
                            <p>Apellido:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Apellido" required value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Nombre:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Nombre" required value={name} onChange={(e) => setName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Telefono:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Telefono" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Domicilio:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Localidad:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Localidad" value={localidad} onChange={(e) => setLocalidad(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Pais:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Pais" value={pais} onChange={(e) => setPais(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Especialidad:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Especialidad" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} />
                        </td>
                    </tr>
                <tr>
                    <td>
                    <button className='btn-edicion'  onClick={closeModal}>Cancelar</button>
                </td>
                <td>
                <button className='btn-edicion'  type="submit">Guardar Cambios</button>
        
        </td>
        </tr>
        </tbody>
            </table>
      </form>

    </div>
    </div>
  );
};

export default EditContactForm;
