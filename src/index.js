import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App ({ numContacts }) {
  const [contacts, setContacts] = useState();
  const [status, setStatus] = useState('loading');
  if (contacts === undefined) {
    window.fetch('https://randomuser.me/api/?results=20&nat=us,cn')
      .then(response => response.json())
      .then(json => setContacts(json.results))
      .catch(error => {
        console.error(error);
        setStatus('error');
      });
    return (
      <div className={status}>
        {
          {
            loading: 'Loading...',
            error: 'Something has gone wrong.'
          }[status]
        }
      </div>
    );
  } else {
    console.log(contacts);
    const list = contacts.map(c =>
      <div key={c.login.uuid}>
        {
          c.name.first + ' ' + c.name.last
        }
      </div>
    );
    return list;
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App numContacts={20} />, mountNode);
