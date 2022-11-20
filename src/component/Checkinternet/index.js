import React from "react";
import { Detector } from "react-detect-offline";
import imageNoInternet from '../../image/wi-fi-disconnected.png'
function Checkinternet(props) {
  return (
    <>
    <Detector
    render={({online})=>{
        return(
            online ? props.children : <div style={{marginTop:50, textAlign:"center"}}>
            <img src={imageNoInternet} alt="no internet"/>
            <h4>No Connection</h4>
            <h4>Please check your internet connection</h4>
            </div>
        )
    }}
    />
    </>
  )
}

export default Checkinternet;
