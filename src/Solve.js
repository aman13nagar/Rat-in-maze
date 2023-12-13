import React from "react";
import Card from "./Card";
function engaging(element){
    return(<Card num={element}/>);
}
function engage(arrays){
    return(
        <div className="rows">
            {arrays.map(engaging)}
        </div>
    );
}
function Solve(props){
    var matrix=props.mat;
    return(
        <div className="initial_matrix">
            {matrix.map(engage)}
        </div>
    );
}
export default Solve