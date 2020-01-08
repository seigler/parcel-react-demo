import React from 'react';

export default function ({ index: myIndex, sort, setSort, children }) {
  const { index, ascending } = sort;
  const myAscending = (index === myIndex ? ascending : false);
  // default value for myAscending will be negated

  const classList = ['sortWidget'];
  if (index === myIndex) {
    classList.push('is-active');
    classList.push(ascending ? 'is-ascending' : 'is-descending');
  }
  return (
    <div
      className={classList.join(' ')}
      onClick={() => setSort({ index: myIndex, ascending: !myAscending })}
    >
      {children}
    </div>
  );
}
