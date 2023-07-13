import React,{useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getSingleData} from '../redux/data.action'

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
    <div>{data.length==1?data.map((el)=>{
        return(
            <div key={el._id}>
                <h5>name : {el.name}</h5>
                <p>id : {el._id}</p>
                <p>email : {el.email}</p>
                <p>number : {el.number}</p>
            </div>
        )
    }):""}</div>
  )
}

export default SingleData