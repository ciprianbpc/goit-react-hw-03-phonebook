import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css'; // Stilizare pentru App

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  // Actualizăm localStorage la fiecare schimbare de contact
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={changeFilter} />
      <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
