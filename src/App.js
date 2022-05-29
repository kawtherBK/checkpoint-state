import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      person:{name:"Kawther BOUKAMCHA",bio:"Je suis une Jeune tunisienne, de 27 ans,titulaire d'un diplôme en scienceinformatique,  Passionnée par le développement web et mobile. Autodidacte et curieuse.",imgSrc:"kaw.jpg",profession:"Developpeuse frontend"},
      show:false,
      timer :1,
      timerID:null
    
  }
}
showProfil=()=>{
  this.setState({show:!this.state.show})
}
ti(){
  this.setState({
    timer:this.state.timer+1
  })
}
componentDidMount(){
  this.setState({
    timerID:setInterval(() => this.ti(),1000)
  }) 
}
componentWillUnmount() {
  clearInterval(this.state.timerID);
}

  render() {
    return (
      <div className="App">
          {this.state.show && ( <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
            <div className=" image d-flex flex-column justify-content-center align-items-center">
             <div>
               <img src={this.state.person.imgSrc} alt=" img kaw" height={150} width={150} />
             </div>
             <h2 className="mt-3 NameStyle ">{this.state.person.name}</h2>
             <h3 >{this.state.person.profession}</h3>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span >{this.state.person.bio}</span>
        </div>
      
    </div>
  </div>
</div>
)}
<div className=" d-flex mt-2 justify-content-center">
        <button onClick={this.showProfil}>SHOW Profile</button>
 </div>
 <div className="d-flex flex-row justify-content-center align-items-center mt-3">
       <p>The component was mounted  {this.state.timer}seconds ago</p> 
         </div>
 </div>
    );
  }
}