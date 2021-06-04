import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import '../assets/styles/components/loading.scss'
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
  const { promiseInProgress } = usePromiseTracker();
  console.log('entreee')
  return (
    <div className="loading">
      { (promiseInProgress === true) ? 
        <Loader type="ThreeDots" color="#FDDC05" height="100" width="100" />
        :
        null
      }
    </div>
  );
};

export default LoadingSpinner;