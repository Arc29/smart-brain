import React from 'react';
import { trackPromise} from 'react-promise-tracker';
import {Spinner} from '../Spinner/Spinner'
class SignIn extends React.Component  {
    constructor(props){
        super(props);
        this.state={
            signInEmail:'',
            signInPassword:'',
            emailMatch:false,
            passMatch:false,
            
        }
    }
    
    onSEmailChange=(event)=>{
        if(!event.target.value)
        this.setState({emailMatch:false})
        else
        this.setState({emailMatch:true})
        this.setState({signInEmail:event.target.value});
    }
    onSPasswordChange=(event)=>{
        if(!event.target.value)
        this.setState({passMatch:false})
        else
        this.setState({passMatch:true})
        this.setState({signInPassword:event.target.value});
    }
    onLogin=(event)=>{
        event.preventDefault();
        if(this.state.emailMatch&&this.state.passMatch){
            trackPromise(
        fetch('https://murmuring-river-81198.herokuapp.com/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.signInEmail,
                pass:this.state.signInPassword
            })
        }).then(res=>res.json()))
        .then(data=>{
            
            if(data.message)
            {this.props.onUserChange(data.id);this.props.onRouteChange('home');}
            else{
            window.alert(data);}
        }).catch(err=>console.log(err))
        
    }
    }

    render(){
        
    return (
        <div className='' style={{position:'relative'}}>
        
        <Spinner  />
        
        <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5" style={{zIndex:10}}>
        <main className="pa4 black-80">
            <form onSubmit={this.onLogin} method='post' className="measure ">
            
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" 
                            onChange={this.onSEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" 
                            onChange={this.onSPasswordChange}
                        />
                    </div>
                    <div className='lh-copy mt3'>
                        {(!this.state.emailMatch)
                        ?<p className='f6 red'>Email must be filled</p>
                        :((!this.state.passMatch)?<p className='f6 red'>Password must be filled</p>:<p></p>
                        )}
                    </div>
    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer" onClick={()=>this.props.onRouteChange('register')}>Register</p>
                        
                    </div>
  </form>
</main>
</article>
</div>
            );
    }
          }
          
export default SignIn;