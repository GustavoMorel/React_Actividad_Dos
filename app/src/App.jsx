// App.js
import React, { useState, useEffect } from 'react'
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import EditContactForm from './components/EditContactForm';
import SearchContact from './components/SearchContact';
import './App.css';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setContacts(storedContacts);
    setFilteredContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setFilteredContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact));
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
    setEditingContact(null);
  };

  const openEditModal = (contact) => {
    setEditingContact(contact);
  };

  const closeEditModal = () => {
    setEditingContact(null);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = contacts.filter(contact =>
      contact.apellido.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const hasResults = filteredContacts.length > 0; // Verificamos si hay resultados de búsqueda

  return (
    <div className='container'>
      <div className="App">
        <h1 className='titulo'>Agenda de Contactos</h1>
        <div className='contenedor-agenda'>
          <AddContactForm addContact={addContact} />
          <div className='filtro'>
            <SearchContact handleSearch={handleSearch} hasResults={hasResults} /> {/* Pasamos hasResults como prop */}
            {hasResults && <ContactList contacts={filteredContacts} deleteContact={deleteContact} openEditModal={openEditModal} />}
          </div>
          <div className="editContactForm">
          {editingContact && (
          <EditContactForm contact={editingContact} updateContact={updateContact} closeModal={closeEditModal} />
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
