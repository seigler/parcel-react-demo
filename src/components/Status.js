import React from 'react';

export default function ({ status }) {
  return <div className={'status is-' + status} />;
}
