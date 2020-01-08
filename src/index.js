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
      .then(json => setContacts(json.results))
      .catch(error => {
        console.error(error);
        setStatus('error');
      });
    return <Status status={status} />;
  } else {
    return <ContactList contacts={contacts} />;
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App numContacts={20} />, mountNode);
