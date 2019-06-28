import React from 'react';
import bcrypt from 'bcryptjs';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:'',
        }
    }
    
    onEmailChange=(event)=>this.setState({email:event.target.value});
    onPassChange=(event)=>this.setState({password:event.target.value});
    onNameChange=(event)=>this.setState({name:event.target.value});
    onRegister=(event)=>{
        event.preventDefault()
        fetch('https://murmuring-river-81198.herokuapp.com/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                passHash:bcrypt.hashSync(this.state.password, bcrypt.genSaltSync(10)),
                name:this.state.name
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.id)
            this.props.onRouteChange('signin');
            else
            window.alert(data);
        })
        

    }    
    render(){
       
    return (
        <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <main className="pa4 black-80">
            <form onSubmit={this.onRegister} method='post' className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" onChange={this.onNameChange}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" onChange={this.onEmailChange}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={this.onPassChange}/>
                    </div>
                   
    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                   
  </form>
</main>
</article>
            );
          }
        }
          
export default Register;