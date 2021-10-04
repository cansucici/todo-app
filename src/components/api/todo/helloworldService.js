import axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:9898/helloworld')

    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:9898/helloworldBean')
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:9898/helloworld/path/${name}`)
    }

}

export default new HelloWorldService();