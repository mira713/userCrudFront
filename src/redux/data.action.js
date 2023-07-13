import {GET_SINGLE_DATA,GET_USER_DATA,DELETE_USER_DATA,UPDATE_USER_DATA,CREATE_USER_DATA} from './data.type';
let baseUrl = "https://dark-erin-lobster-boot.cyclic.app/users"

export const getData=()=>async(dispatch)=>{
   let data = await fetch(`${baseUrl}`)
   data = await data.json()
   dispatch({type:GET_USER_DATA,payload:data})
}

export const deleteData=(id)=>async(dispatch)=>{
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    }) .then((res) => {
        res.json()
        dispatch({ type: DELETE_USER_DATA, payload: res })
    });
}

export const getSingleData=(id)=>async(dispatch)=>{
    let data = await fetch(`${baseUrl}/${id}`)
    data = await data.json()
    dispatch({type:GET_SINGLE_DATA,payload:data})
 }

 export const updateData=(id,payloads)=>async(dispatch)=>{
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payloads),
        headers: {
            'Content-type': 'application/json'
        }
    }) .then((res) => {
        res.json()
        dispatch({ type: UPDATE_USER_DATA, payload: res })
    });
}

export const createData=(payloads)=>async(dispatch)=>{
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        body: JSON.stringify(payloads),
        headers: {
            'Content-type': 'application/json'
        }
    }) .then((res) => {
        res.json()
        
        dispatch({ type:CREATE_USER_DATA, payload: res })
    });
}