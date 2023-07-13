import {useState, useEffect} from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from "../component/home"
import SingleData from '../component/singleData';
import EditAdd from '../component/editAdd';

export const AllRoute=()=>{
    return(
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singleData" element={<SingleData/>}/>
        <Route path="/editadd" element={<EditAdd/>}/>
        </Routes>
        </>
    )
}