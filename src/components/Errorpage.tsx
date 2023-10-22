import {useRouteError} from 'react-router-dom'
import React from 'react';
export const ErrorPage:React.FC = ()=>{
  const error:any= useRouteError()
  console.log(error)

  return (
    <div id="error-page">
      <h1>哎哟!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}