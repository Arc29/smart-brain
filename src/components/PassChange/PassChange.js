import React from 'react';
import bcrypt from 'bcryptjs';
import { trackPromise} from 'react-promise-tracker';
import {Spinner} from '../Spinner/Spinner'

class PassChange extends React.Component  {
    constructor(props){
        super(props);
        this.state={
            password:'',
            confirmPassword:'',
            oldChecked:false,
            match:false
        }
    }
    
    onPassChange=(event)=>this.setState({password:event.target.value});
    onCPassChange=(event)=>{
        this.setState({confirmPassword:event.target.value});
        console.log(event.target.value)
        if(event.target.value!==this.state.password)
        this.setState({match:false})
        else
        this.setState({match:true})
        console.log(this.state.match)
    }
    onConfirm=(event)=>{
        event.preventDefault();
        this.refs.mainForm.reset();
        
        if(this.state.match){
            trackPromise(
        fetch('https://murmuring-river-81198.herokuapp.com/profile/'+this.props.id,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                
                passHash:bcrypt.hashSync(this.state.password, bcrypt.genSaltSync(10))
            })
        }).then(res=>res.json()))
        .then(data=>{
            
            window.alert(data);
            this.props.onRouteChange('signin')
        }).catch(err=>window.alert(err))
        
    }
    }
    onLogin=(event)=>{
        event.preventDefault();
        this.refs.mainForm.reset();

        if(!this.state.oldChecked&&this.state.match){
        trackPromise(
        fetch('https://murmuring-river-81198.herokuapp.com/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.props.email,
                pass:this.state.password
            })
        }).then(res=>res.json()))
        .then(data=>{
            
            if(data.message)
            {this.setState({
                password:'',
                confirmPassword:'',
                oldChecked:true,
                match:false
            })}
            else{
            window.alert(data);
            this.setState({
                password:'',
                confirmPassword:'',
                match:false
            })
            }
        }).catch(err=>console.log(err))
        
    }
    }
    
    render(){
        const f=this.state.oldChecked?this.onConfirm:this.onLogin;
    return (
        
        <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <Spinner />
        <main className="pa4 black-80">
            <form method='post' onSubmit={f} className="measure" ref='mainForm'>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                {(this.state.oldChecked)
                    ?<legend className="f1 fw6 ph0 mh0">Change Password</legend>
                    :<legend className="f1 fw6 ph0 mh0">Retype Old Password</legend>
                }
                    <div className="mt3">
                    {(this.state.oldChecked)
                        ?<label className="db fw6 lh-copy f6" for="email-address">Password</label>
                        :<label className="db fw6 lh-copy f6" for="email-address">Old Password</label>
                    }
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="email-address" 
                            onChange={this.onPassChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Confirm Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="cpassword" id="password" 
                            onChange={this.onCPassChange}
                        />
                    </div>
                    <div className='lh-copy mt3'>
                        {(!this.state.match)
                        ?<p className='f6 red'>Passwords do not match</p>
                        :<p></p>
                        }
                    </div>
    </fieldset>

                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Change Password" />
                    </div>
                    
  </form>
</main>
</article>
            );
    }
          }
          
export default PassChange;