import React, { useState } from 'react';

import SortWidget from '../SortWidget';

export default function ({ contacts }) {
  const [sort, setSort] = useState({ index: 3, ascending: true });
  const { index, ascending } = sort;
  const sortedContacts = contacts.slice(0).sort((a, b) => {
    if (a[index] > b[index]) {
      return ascending ? 1 : -1;
    } else if (a[index] < b[index]) {
      return ascending ? -1 : 1;
    } else { // secondary sort by last name
        if (a[3] > b[3]) {
          return ascending ? 1 : -1;
        } else if (a[3] < b[3]) {
          return ascending ? -1 : 1;
        } else {
          return 0;
        }
    }
  });
  return (
    <table>
      <thead>
        <tr>
          <th rowSpan='2'>
            <SortWidget index={1} sort={sort} setSort={setSort}>
              Gender
            </SortWidget>
          </th>
          <th colSpan='2'>Name</th>
          <th rowSpan='2'>
            <SortWidget index={4} sort={sort} setSort={setSort}>
              Country
            </SortWidget>
          </th>
          <th rowSpan='2'>
            <SortWidget index={5} sort={sort} setSort={setSort}>
              Date of Birth
            </SortWidget>
          </th>
          <th rowSpan='2'>
            <SortWidget index={6} sort={sort} setSort={setSort}>
              Birthday
            </SortWidget>
          </th>
        </tr>
        <tr className='subHeading'>
          <th>
            <SortWidget index={2} sort={sort} setSort={setSort}>
              First
            </SortWidget>
          </th>
          <th>
            <SortWidget index={3} sort={sort} setSort={setSort}>
              Last
            </SortWidget>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          sortedContacts.map(c => (
            <tr key={c[0]}>
              {c.slice(1).map((x, i) => <td key={i}>{x}</td>)}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
