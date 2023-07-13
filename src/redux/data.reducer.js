import {GET_SINGLE_DATA,GET_USER_DATA,DELETE_USER_DATA,UPDATE_USER_DATA,CREATE_USER_DATA} from './data.type';

let initialState={
     loading : true,
     error : false,
     data : [],
     msg : ""
}

export const userReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_SINGLE_DATA :{
            return {
                ...state,
                loading: false, data:payload
            }
        }
        case GET_USER_DATA : {
            return {
                ...state,
                loading: false, data:payload
            }
        }
        case DELETE_USER_DATA : {
            return {
                ...state,
                msg:payload
            }
        }
        case UPDATE_USER_DATA : {
            return {
                ...state,
                msg:payload
            }
        }
        case CREATE_USER_DATA : {
            return {
                ...state,
                msg:payload
            }
        }
        default :{
            return state
        }
    }
}