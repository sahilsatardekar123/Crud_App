import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { updateUser } from './components/user/userSlice';
import { useNavigate } from 'react-router-dom';

function Update() {
    const {id} = useParams();
    const users = useSelector(state => state.users);
    const existingUser = users.find(user => user.id == id);
    // const {name, email} = existingUser[0];
    const { name, email } = existingUser ;
    // || { name: '', email: '' }
    const [uname, setUname] = useState(name);
    const [uemail, setUemail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate()

     const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
             id: id,
              name:uname,
               email:uemail
             }));
        navigate('/');
     }
     
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
       
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Password'
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email:</label>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Email'
              value={uemail}
              onChange={(e) => setUemail(e.target.value)}
            />
          </div>
          <br />
          <button type='submit' className='btn btn-info'>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update
