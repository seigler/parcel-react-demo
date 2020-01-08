import React from 'react';

export default function ({ contact }) {
  const {
    gender,
    name: { first, last },
    location: { country },
    dob: { date: dobString }
  } = contact;
  const dob = new Date(dobString);
  const birthday = new Date(dob).setFullYear(0);
  const today = new Date().setFullYear(0);
  const birthdayMessage = (birthday === today
    ? 'Today'
    : (birthday < today
      ? 'Past'
      : 'Future'
    )
  );
  return (
    <tr>
      <td>{gender}</td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{country}</td>
      <td>{dob.toDateString()}</td>
      <td>{birthdayMessage}</td>
    </tr>
  );
}
