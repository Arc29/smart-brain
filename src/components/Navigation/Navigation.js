import React from 'react';

const Navigation=({onRouteChange , isSignedIn})=>{
    if(isSignedIn){
    return(
        <nav className='flex justify-end pa3'>
            <p className='f3 link dim black underline pointer pa2' onClick={()=>onRouteChange('home')}>Home</p>
            <p className='f3 link dim black underline pointer pa2' onClick={()=>onRouteChange('profile')}>Profile</p>
            <p className='f3 link dim black underline pointer pa2' onClick={()=>onRouteChange('signin')}>Sign Out</p>
        </nav>
    )
    }
    else{
        return(
            <nav className='flex justify-end pa3'>
                <p className='f3 link dim black underline pointer pa2' onClick={()=>onRouteChange('signin')}>Sign In</p>
                <p className='f3 link dim black underline pointer pa2' onClick={()=>onRouteChange('register')}>Register</p>
            </nav>
        )
    }
}

export default Navigation