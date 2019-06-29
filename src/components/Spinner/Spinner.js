import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";

// First way to import
import { ClipLoader } from 'react-spinners';
import './Spinner.css';
 

export const Spinner = (props) => {
const { promiseInProgress } = usePromiseTracker({area: props.area});
 
  return (
    <div>
    {
    (promiseInProgress === true) ?
    <div className='react-spinner-overlay'>
        <ClipLoader
          
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          
        />
      </div> 
      :
        null
    }
  </div>
  )
};