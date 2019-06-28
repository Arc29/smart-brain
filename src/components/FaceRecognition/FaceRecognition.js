import React from 'react';
import './FaceRecognition.css'
const FaceRecognition=({imageURL,box})=>{
    return(
        <div className='center pa3'>
         <div className='absolute mt2'>
          <img id='inputImg' alt='' src={imageURL} width='500px' height='auto' />
          <div className='boxContainer' 
          style={{top:box.top_row,bottom:box.bottom_row,left:box.left_col,right:box.right_col}}></div>
          </div>
        </div>
    )
}

export default FaceRecognition