import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    <p>{contact.name}: {contact.number}</p>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

export default ContactItem;
