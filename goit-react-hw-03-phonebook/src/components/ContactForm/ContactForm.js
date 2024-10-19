import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
