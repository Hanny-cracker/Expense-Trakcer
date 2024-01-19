import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text ,setText] = useState('');
  const [amount ,setAmount] = useState(0)
  const {addTransaction} = useContext(GlobalContext);

  const Submit = ( e ) =>{
    e.preventDefault();
    const newTransaction = {
      id : Math.floor(Math.random() * 10000000),
      text,
      amount : +amount //this is to convert a string to a number 
    }
    addTransaction(newTransaction);
    setText( '' );
    setAmount( 0 )

  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={Submit} id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={ (e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={ (e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button type='submit' className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
