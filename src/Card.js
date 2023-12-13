import React from "react";
function Card(props){
    var n;
    n=props.num;
    if(n===1){
        return(
            <div className="one">
            </div>
        );
    }
    else if(n===2){
        return(
            <div className="two">
            </div>
        );
    }
    else if(n===3){
        return(
            <div className="source" >
                <img src="https://www.desicomments.com/wp-content/uploads/Naughty-Image-Of-Jerry-Dc328.png" alt="source"/>
            </div>
        );
    }
    else if(n===4){
        return(
            <div className="source">
                <img src="https://image.shutterstock.com/image-photo/piece-cheese-isolated-on-white-260nw-1416372146.jpg" alt="dest"/>
            </div>
        );
    }
    else{
        return(
            <div className="zero">
            </div>
        );
    }
}
export default Card