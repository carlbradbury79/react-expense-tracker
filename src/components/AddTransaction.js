import React, { useState } from 'react';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <>
      <h2>Add Transaction</h2>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label
            htmlFor='amount'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          >
            Amount
          </label>
          <input type='number' />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  );
};
