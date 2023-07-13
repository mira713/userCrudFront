import React,{useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getSingleData} from '../redux/data.action';
import './style.css';

const SingleData = () => {
    let data = useSelector((store)=>store.userReducer.data);
    let id = localStorage.getItem('id');
    let dispatch = useDispatch()

useEffect(()=>{
    let ids = id||localStorage.getItem('id');
  dispatch(getSingleData(ids))
},[])

console.log(data)
  return (
    <div class="container1">
        <div class="data-container">
            {data.length === 1 ? (
                data.map((el) => {
                    return (
                        <div key={el._id}>
                            <h5>Name: {el.name}</h5>
                            <p>ID: {el._id}</p>
                            <p>Email: {el.email}</p>
                            <p>Number: {el.number}</p>
                        </div>
                    );
                })
                ) : (
                    <p className="loading">...Loading</p>
                )}
            </div>
        </div>
  )
}

export default SingleData