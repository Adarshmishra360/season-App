import './SeasonDisplay.css';
import React from 'react';
import ReactDOM from "react-dom";
const seasonConfig={
    summer:{
        text:"Let's hit the beach!",
        iconName:'sun',
        color:'orange'
    },
    winter:{
        text:'Burr it is cold!',
        iconName:'snowflake',
        color:'blue'
    }
}

const getseason =(lat,month)=>{
    if(month>2 && month<9){
        return lat >0?'summer':'winter'; 
    }
    else{
        return lat>0 ?'winter':'summer';
    }
}


const SeasonDisplay=(props)=>{
    const season =getseason(props.lat,new Date().getMonth())
    const {text,iconName,color}= seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${color} ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={` icon-right massive ${color} ${iconName} icon`} />
        </div>
    )
}
export default SeasonDisplay;