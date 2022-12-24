import React from 'react';
import './Cell.css';

const RedColor = () => {
    return (
        <div className='red-color'>

        </div>
    );
}

const GreenColor = () => {
    return (
        <div className='green-color'>

        </div>
    );
}

const WhiteColor = () => {
    return (
        <div className='white-color'>

        </div>
    );
}

function Cell(props){

    if(props.num == 0) {
        return(<RedColor></RedColor>);      
    }
    
    else if(props.num == 1) {
        return(<GreenColor></GreenColor>)
    }
    
    else {
        return(<WhiteColor></WhiteColor>);
    }
}

export default Cell;