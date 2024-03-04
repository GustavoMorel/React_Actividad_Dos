// components/AddContactForm.js
import React, { useState } from 'react';

const AddContactForm = ({ addContact }) => {
    const [apellido, setApellido] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [pais, setPais] = useState('');
    const [especialidad, setEspecialidad] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!apellido || !name || !phone) return;
        addContact({ id: Date.now(), apellido, name, phone });
        setApellido('');
        setName('');
        setPhone('');
        setDomicilio('');
        setLocalidad('');
        setPais('');
        setEspecialidad('');
    };
    function mostrar() {
        var x = document.getElementById('lista');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='formulario-agrega'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p className='parrafo-agrega'>Apellido:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Apellido" required value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='parrafo-agrega'>Nombre:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Nombre" required value={name} onChange={(e) => setName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='parrafo-agrega'>Telefono:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Telefono" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='parrafo-agrega'>Domicilio:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='parrafo-agrega'>Localidad:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Localidad" value={localidad} onChange={(e) => setLocalidad(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='parrafo-agrega'>Pais:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Pais" value={pais} onChange={(e) => setPais(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className='parrafo-agrega'>Especialidad:</p>
                        </td>
                        <td>
                        <input type="text" placeholder="Especialidad" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
               
                <button className='btn-agrega' type="submit" onclick="mostrar()">Agregar Contacto</button>
            </div>
        </form>
    );
};

export default AddContactForm;
