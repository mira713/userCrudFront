import React,{useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {updateData,createData} from '../redux/data.action';
import './style.css';

const EditAdd = () => {
    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const id=localStorage.getItem('id');
    const msg = useSelector((store)=>store.userReducer.msg);
    const type= localStorage.getItem('type')
    const dispatch = useDispatch()

const submitForm=()=>{
let ids = id || localStorage.getItem('id')
ids? dispatch(updateData(ids,{name,email,number})):dispatch(createData({name,email,number}))
 
  setName('');setEmail('');setNumber('')
  alert(`User Details had been ${ids?"updated":"Added"}`)
  localStorage.removeItem('id')
  localStorage.removeItem('type')
}


  return (
    <div class="container2">
        <div class="form-container">
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Enter your contact number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={submitForm}>{type === "edit" ? "Update User" : "Create User"}</button>
        </div>
    </div>
  )
}

export default EditAdd