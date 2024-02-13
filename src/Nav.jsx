import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './components/user/userSlice';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name:name, email:email }));
    navigate('/');
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Enter Name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email:</label>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button type='submit' className='btn btn-info'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
