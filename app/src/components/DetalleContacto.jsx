// components/DetalleContacto.js
import React from 'react';

const DetalleContacto = ({ contact }) => {
  return (
    <div className="detalle-contacto">
      <h2>Detalles del Contacto</h2>
      <p><strong>Nombre:</strong> {contact.name}</p>
      <p><strong>Apellido:</strong> {contact.apellido}</p>
      <p><strong>Teléfono:</strong> {contact.phone}</p>
      <p><strong>Domicilio:</strong> {contact.domicilio}</p>
      <p><strong>Localidad:</strong> {contact.localidad}</p>
      <p><strong>País:</strong> {contact.pais}</p>
      <p><strong>Especialidad:</strong> {contact.especialidad}</p>
    </div>
  );
};

export default DetalleContacto;
