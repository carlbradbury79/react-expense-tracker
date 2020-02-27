import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <>
      <h2>Add Transaction</h2>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  );
};
