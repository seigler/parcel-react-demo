import React from 'react';

import Contact from './Contact';

export default function ({ contacts }) {
  return (
    <table>
      <thead>
        <tr>
          <th>gender</th>
          <th>first</th>
          <th>last</th>
          <th>country</th>
          <th>birthdate</th>
          <th>birthday</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map(c => <Contact contact={c} key={c.login.uuid} />)
        }
      </tbody>
    </table>
  );
}
