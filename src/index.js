import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Status from './components/Status';
import ContactList from './components/ContactList';

function App ({ numContacts }) {
  const [contacts, setContacts] = useState();
  const [status, setStatus] = useState('loading');
  if (contacts === undefined) {
    window.fetch('https://randomuser.me/api/?results=20&nat=us,ca')
      .then(response => response.json())
      .then(json => setContacts(json.results.map(mapContacts)))
      .catch(error => {
        console.error(error);
        setStatus('error');
      });
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
  const birthday = new Date(dob).setFullYear(0);
  const today = new Date().setFullYear(0);
  const birthdayMessage = (birthday === today
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
