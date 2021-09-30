
import axios from "axios";
import { Component } from "react";


class TestAxios extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,  
            picture :"",
            title: ""         
        }
    }

    componentDidMount(){
        const request = "https://api.nasa.gov/planetary/apod?api_key=H9Xg3jE1NIbzVP7mrzCqC91BI93t3tFXdisOb0ta";
        axios.get(request)
            .then ((response) => {
                console.log(response);
                this.setState({title: response.data.title});
                this.setState({picture: response.data.url});
                this.setState({isLoaded : true});
            }

            )
            .catch((error) => {
                console.log(error);
            }

            )
    
    }

    render(){

        if(!this.state.isLoaded) return <h4>Loading ...</h4>
        return(
            <>
            <h1>{ this.state.title }</h1>
            <img src={ this.state.picture} alt="photoNasa"/>
            </>
            
        )
    }


}

export default TestAxios;