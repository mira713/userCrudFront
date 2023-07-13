import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getData,deleteData} from "../redux/data.action";
import { useNavigate } from "react-router-dom";
import './style.css';

const Home = () => {
    let data = useSelector((store)=>store.userReducer.data)
    let msg = useSelector((store)=>store.userReducer.msg)
    let dispatch = useDispatch();
    let navigate= useNavigate()

let showData=(id)=>{
   localStorage.setItem('id',id);
   navigate('/singleData')
}

let editAddData = (id,type) =>{
   localStorage.setItem('id',id);
   localStorage.setItem('type',type)
   navigate('/editAdd')
}

let deleteDataa = (id) => {
    dispatch(deleteData(id))
}

let createUser=(type)=>{
    localStorage.setItem('type',type);
    navigate('/editAdd')
}
    useEffect(()=>{
        console.log('msg',msg)
        dispatch(getData())
    },[msg])
    return(
        <div className="container">
        <button onClick={()=>{createUser("add")}} className="btn">Add User</button>
                <table className="table">
                    <thead>
                        <tr>
                           <td>index</td>
                           <td>id</td>
                           <td>name</td>
                           <td>view</td>
                           <td>edit</td>
                           <td>delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((el,i)=>{
                            return(
                                <tr key={el._id}>
                                    <td>{i+1}</td>
                                    <td>{el._id}</td>
                                    <td>{el.name}</td>
                                    <td onClick={()=>showData(el._id)}>view detail</td>
                                    <td onClick={()=>editAddData(el._id,"edit")}>edit detail</td>
                                    <td onClick={()=>deleteDataa(el._id)}>delete user</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default Home