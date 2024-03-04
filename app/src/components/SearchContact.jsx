// components/SearchContact.js
import React, { useState } from 'react';

const SearchContact = ({ handleSearch, hasResults }) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className='contenedor-filtro'>
      <table className='tabla-filtro'>
        <tbody>
          <tr>
            <td><p className='detalle'>Filtrar por: </p></td>
            <td>
            <input
              type="text"
              placeholder="Filtrar apellido"
              value={searchTerm}
              onChange={handleChange}
            />
      
            </td>
          </tr>
        </tbody>
      </table>
      {!hasResults && <p className='lista-vacia'>LISTA DE CONTACTOS VACIA</p>}
    </div>
  );
};

export default SearchContact;
