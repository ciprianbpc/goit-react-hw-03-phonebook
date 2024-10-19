import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <ContactItem 
          key={contact.id}  // Folosim contact.id ca și cheie pentru fiecare element din listă
          contact={contact} 
          onDeleteContact={onDeleteContact} 
        />
      ))}
    </ul>
  );
};

export default ContactList;
