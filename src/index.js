import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App ({ numContacts }) {
  const [contacts, setContacts] = useState();
  if (contacts === undefined) {
    setContacts(['a']);
    return <div className='loading'>Loading</div>;
  } else {
    const list = contacts.map(c => <div key={c}>{c}</div>);
    return list;
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App numContacts={20} />, mountNode);
