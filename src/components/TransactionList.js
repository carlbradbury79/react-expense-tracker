import React from 'react';

export const TransactionList = () => {
  return (
    <>
      <h2>History</h2>
      <ul id='list' className='list'>
        <li className='minus'>
          Cash <span>-£200</span>
          <button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  );
};
