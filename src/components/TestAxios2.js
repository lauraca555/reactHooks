

import { Component } from "react";
import apiMovies from "./apiMovies";

class TestAxios2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,  
            picture :"",
            title: ""     
        }
    }

    componentDidMount(){
        apiMovies.get('/planetary/apod')
            .then ((response) => {
                console.log(response.data);
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

export default TestAxios2;