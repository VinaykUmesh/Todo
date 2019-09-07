import axios from "axios";

class TodoDataService{
    fetchAllTodo(name){
        return axios.get(`http://localhost:8080/user/${name}/todos`)
    }
    deleteTodoById(username,id){
        return axios.delete(`http://localhost:8080/user/${username}/todos/${id}`)
    }

    retrieveById(name,id){
        return axios.get(`http://localhost:8080/user/${name}/todos/${id}`)
    }
    updateById(name,id ,todo){
        return axios.put(`http://localhost:8080/user/${name}/todos/${id}`,todo)
    }
    createById(name,id ,todo){
        return axios.post(`http://localhost:8080/user/${name}/todos/`,todo)
    }
}

export default new TodoDataService()