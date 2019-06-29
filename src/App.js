import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import PassChange from './components/PassChange/PassChange';



const particleparams = {
  "particles": {
    "number": {
      "value": 80,
      density: {
        enable: true,
        value_area: 800
      }
    },

  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}



class App extends Component {
  function
  constructor() {
    super();
    this.state = {
      id:-1,
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      name:'',
      email:'',
      entries:0
      
    }
  }
  calcBoxDim = (data) => {
    let boxData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImg');
    const width = image.width;
    const height = image.height;
    return ({
      left_col: width * boxData.left_col,
      right_col: width * (1 - boxData.right_col),
      top_row: height * boxData.top_row,
      bottom_row: height * (1 - boxData.bottom_row)
    })
  }
  onInputChange = (event) => {

    this.setState({ input: event.target.value })
  }
  onButtonClick = () => {

    this.setState({ imageURL: this.state.input });
    fetch('https://murmuring-river-81198.herokuapp.com/imageAPI',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({input:this.state.input}),
    }).then(res=>res.json())
      .then(response => {

        this.setState({ box: this.calcBoxDim(response) })
        fetch('https://murmuring-river-81198.herokuapp.com/image',{
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({id:this.state.id}),
        }).then(res=>res.json())
          .then(data=>this.setState({entries:data})) 
      })
      .catch(err => console.log(err))
  }
  onRouteChange = (route) => {
    if(route==='home')this.setState({isSignedIn:true})
    else if(route==='signin')this.setState({id:-1,
      input: '',
      imageURL: '',
      box: {},
      
      isSignedIn: false,
      name:'',
      entries:0})
    this.setState({ route });
  }
  onUserChange=(id)=>{
    fetch('https://murmuring-river-81198.herokuapp.com/profile/'+id)
    .then(res=>res.json())
    .then(data=>{
      this.setState({name:data.name,entries:data.entries,id:id,email:data.email})
    })
  }

  render() {
    return (
      <div className="App">

        <Particles className='particle'
          params={particleparams} />
         
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        {(this.state.route === 'signin')
          ? <SignIn onRouteChange={this.onRouteChange} onUserChange={this.onUserChange} />

          : (this.state.route === 'home'
            ? <div><Logo />
              <Rank name={this.state.name} entries={this.state.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
              <FaceRecognition imageURL={this.state.imageURL} box={this.state.box} /></div>
            : (this.state.route === 'profile'
              ?<Profile id={this.state.id} onRouteChange={this.onRouteChange}/>
              :(this.state.route==='passchange')
               ?<PassChange id={this.state.id} email={this.state.email} onRouteChange={this.onRouteChange}/>
                :<Register onRouteChange={this.onRouteChange} />
            )
          )
        }
      </div>

    );
  }
}

export default App;
