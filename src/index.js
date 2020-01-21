import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Status from './components/Status';
import ContactList from './components/ContactList';

function App ({ numContacts }) {
  const [contacts, setContacts] = useState();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    window.fetch('https://randomuser.me/api/?results=20&nat=us,ca')
      .then(response => response.json())
      .then(json => setContacts(json.results.map(mapContacts)))
      .catch(error => {
        console.error(error);
        setStatus('error');
      });
  }, [numContacts]);

  if (contacts === undefined) {
    return <Status status={status} />;
  } else {
    return <ContactList contacts={contacts} />;
  }
}

function mapContacts (contact) {
  const {
    login: { uuid },
    gender,
    name: { first, last },
    location: { country },
    dob: { date: dobString }
  } = contact;
  const dob = new Date(dobString);
  const birthday = new Date(0, dob.getMonth(), dob.getDate());
  const now = new Date();
  const today = new Date(0, now.getMonth(), now.getDate());
  const birthdayMessage = (birthday.getTime() === today.getTime()
    ? 'Today!'
    : (birthday < today
      ? 'Past'
      : 'Future'
    )
  );
  return [
    uuid,
    gender,
    first,
    last,
    country,
    dob.toDateString(),
    birthdayMessage
  ];
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App numContacts={20} />, mountNode);
