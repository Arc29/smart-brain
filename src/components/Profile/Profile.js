import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { trackPromise} from 'react-promise-tracker';
import {Spinner} from '../Spinner/Spinner'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        trackPromise(
        fetch('https://murmuring-river-81198.herokuapp.com/profile/' + this.props.id)
            .then(res => res.json()))
            .then(data => {
                this.setState(data)
            })
            .catch(err => console.log(err))
    }
    onDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <h1 className='red'>Are you sure?</h1>
                  <p>You want to delete this account?</p>
                  <div className='flex justify-between'>
                  <button className=' grow f5 link ph3 pv2 dib white bg-red mt3 pa2'
                    onClick={() => {
                      this.handleClickDelete();
                      onClose();
                    }}
                  >
                    Yes, Delete it!
                  </button>
                  <button onClick={onClose} className=' grow f5 link ph3 pv2 dib white bg-green mt3 pa2'>No</button>
                  </div>
                </div>
              );
            }
          });
       
    }
    handleClickDelete=()=>{
        trackPromise(
         fetch('https://murmuring-river-81198.herokuapp.com/profile/' + this.props.id, { method: 'delete' })
            .then(res => res.json()))
            .then(data => {
                window.alert(data)
                this.props.onRouteChange('signin')
            }).catch(err => window.alert(err))
    }

    render() {
        const { name, entries, email, id, doj } = this.state
        return (
     <div className='center'>
        <article className="mw6 flex flex-column content-center center bg-transparent shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
            <Spinner />
            <div className="tc">

                <h1 className="f2">{name}</h1>
                <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <table style={{ width: '75%' }} className='center content-center'>
                <tbody>
                    <tr >
                        <td className="ml4 pa2 pr4 br b--gray-10">Email</td>
                        <td className="pa2 fw2">{email}</td>

                    </tr>
                    <hr className="mw3 bb bw1 b--black-10" />
                    <tr>
                        <td className="ml4 pa2 br b--gray-10">User ID</td>
                        <td className="pa2 fw2">{id}</td>
                    </tr>
                    <hr className="mw3 bb bw1 b--black-10" />
                    <tr>
                        <td className="ml4 pa2 br b--gray-10">Entries</td>
                        <td className="pa2 fw2">{entries}</td>
                    </tr>
                    <hr className="mw3 bb bw1 b--black-10" />
                    <tr>
                        <td className="ml4 pa2 br b--gray-10">Joining Date</td>
                        <td className="pa2 fw2">{doj}</td>
                    </tr>
                </tbody>
            </table>
            <div className='center'>
            <button className=' grow f4 link ph3 pv2 dib white bg-red mt3 pa2' onClick={this.onDelete}>Delete User</button>
            <button className=' grow f4 link ph3 pv2 dib white bg-light-purple mt3 pa2' onClick={()=>this.props.onRouteChange('passchange')}>Change Password</button>
            </div>
        </article></div>   
        )
    }
}

export default Profile;
