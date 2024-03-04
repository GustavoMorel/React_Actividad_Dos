// components/ContactList.js
import React from 'react';
import DetalleContacto from './DetalleContacto'; // Importamos el nuevo componente DetalleContacto

const ContactList = ({ contacts, deleteContact, openEditModal }) => {
    const handleDoubleClick = (contact) => {
        // Al hacer doble clic en un contacto, mostramos los detalles del contacto utilizando el nuevo componente DetalleContacto
        // Aquí podrías agregar lógica para mostrar los detalles en algún otro lugar de la interfaz, como un modal o un panel lateral
        console.log('Mostrar detalles del contacto:', contact);
    };

    return (
      <div id='lista' className='lista'>
        <ul>
            {contacts.map(contact => (
                <li className='lista-contactos' key={contact.id} onDoubleClick={() => handleDoubleClick(contact)}> {/* Escuchamos el evento onDoubleClick */}
                    <span className='datos'><p className='detalle'>Apellido: </p> {contact.apellido}
                    <p className='detalle'>Telefono: </p>{contact.phone}</span>
                    <div className='contenedor-btn-lista'>
                    <button className='btn-lista' onClick={() => openEditModal(contact)}>Editar/Consultar</button> {/* Botón para editar */}
                    <button className='btn-lista' onClick={() => deleteContact(contact.id)}>Eliminar</button> {/* Botón para eliminar */}
                    </div>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default ContactList;
