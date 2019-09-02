import axios from "axios";

class HelloWorldService{
    retriveMessage(){
        return axios.get("http://localhost:8080/hello-world-bean/path/umesh")
    }
}

// eslint-disable-next-line
export default new HelloWorldService;