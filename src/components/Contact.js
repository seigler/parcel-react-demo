import React from 'react';

export default function ({ contact }) {
  const {
    gender,
    name: { first, last },
    location: { country },
    dob: { date: dobString }
  } = contact;
  const dob = new Date(dobString);
  const birthday = dob.setFullYear(0);
  const now = new Date('Jun 1 2020');
  const today = now.setFullYear(0);
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

// Gender
// First name
// Last name
// Country
// Date of birth
// Create and display an additional “Birthday” field whose value is
//   dynamically calculated.
//   The value should identify if the user’s birthday:
//     a) already happened
//     b) is today(!)
//     c) has yet to occur, based on today’s date for the current year.

/*
{
  "gender": "female",
  "name": {
    "title": "Miss",
    "first": "Jesus",
    "last": "Ramos"
  },
  "location": {
    "street": {
      "number": 6038,
      "name": "Avenida del Planetario"
    },
    "city": "Almería",
    "state": "Región de Murcia",
    "country": "Spain",
    "postcode": 90813,
    "coordinates": {
      "latitude": "-16.9661",
      "longitude": "123.7113"
    },
    "timezone": {
      "offset": "+8:00",
      "description": "Beijing, Perth, Singapore, Hong Kong"
    }
  },
  "email": "jesus.ramos@example.com",
  "login": {
    "uuid": "7c2d931f-e8ab-4a56-af38-7a018386fec9",
    "username": "lazyladybug703",
    "password": "cheater",
    "salt": "FNSQvzA0",
    "md5": "1ed8906375d7d891efbcfcb7a32fd007",
    "sha1": "4983df0d8cb51ec9bbd0a5c939fa1c0554f4d9e3",
    "sha256": "2f0dcb700102a2c5715d1b25781413a1dc2198b5178a7ab84d1e6821751bc783"
  },
  "dob": {
    "date": "1945-05-02T18:39:31.664Z",
    "age": 75
  },
  "registered": {
    "date": "2003-07-15T09:00:44.547Z",
    "age": 17
  },
  "phone": "925-399-751",
  "cell": "633-882-871",
  "id": {
    "name": "DNI",
    "value": "73016608-Y"
  },
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/53.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/53.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
  },
  "nat": "ES"
}
*/
