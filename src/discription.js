import React from 'react';
import './App.css';
function disc(){
    return(
        <div class="disc">
            <div className='p1'><div className='zero'></div><h1>Rat can't move</h1></div>
            <div className='p2'><div className='one'></div><h1>Rat can move</h1></div>
            <div className='p3'><div className='two'></div><h1>Possible path</h1></div>
        </div>
    )
}
export default disc;