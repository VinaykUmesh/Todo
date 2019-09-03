import axios from "axios";

class TodoDataService{
    fetchAllTodo(name){
        return axios.get(`http://localhost:8080/user/${name}/todos`)
    }
    deleteTodoById(username,id){
        return axios.delete(`http://localhost:8080/user/${username}/todos/${id}`)
    }
}

export default new TodoDataService()