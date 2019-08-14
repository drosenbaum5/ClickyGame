import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import NavBar from "./components/NavBar/NavBar";
import HeaderDiv from "./components/Header/HeaderDiv";
import ImageContainer from "./components/ImageContainer/ImageContainer"

class App extends Component {

    state = {
      score: 0,
      topScore: 0,
      clicked: []  
    }

    updateScore = (id) => {
      console.log(id)

      this.state.clicked.includes(id)
      
      if(this.state.clicked.includes(id)) {
        
        this.setState({score: 0})
      } else {
      
            this.setState({clicked: [...this.state.clicked, id]})
            this.setState({score: this.state.score + 1})
    }

    }


    


  
render() { 
 return (
  <Wrapper>
    <NavBar score = {this.state.score} topScore = {this.state.topScore}/>
    <HeaderDiv /> 
    <ImageContainer updateScore = {this.updateScore}/>
  </Wrapper>
  
  )
} 
}

export default App;
