import axios from "axios";
// eslint-disable-next-line 
import { API_URL , JPA_API_URL } from './URL.js';

class TodoDataService{
    fetchAllTodo(name){
        return axios.get(`${JPA_API_URL}/user/${name}/todos`)
    }
    deleteTodoById(username,id){
        return axios.delete(`${JPA_API_URL}/user/${username}/todos/${id}`)
    }

    retrieveById(name,id){
        return axios.get(`${JPA_API_URL}/user/${name}/todos/${id}`)
    }
    updateById(name,id ,todo){
        return axios.put(`${JPA_API_URL}/user/${name}/todos/${id}`,todo)
    }
    createById(name,id ,todo){
        return axios.post(`${JPA_API_URL}/user/${name}/todos/`,todo)
    }
}

export default new TodoDataService()