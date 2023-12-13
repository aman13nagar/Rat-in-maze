import React from "react";
import matrix from "./matrix";
import Solve from "./Solve";
function handle_output(arr){
    let temp,i=0,j=0;
    temp=structuredClone(matrix);
    for(var k=0;k<arr.length;k++){
        if(arr[k]==='D'){
            i++;
            temp[i][j]=2;
        }
        else if(arr[k]==='L'){
            j--;
            temp[i][j]=2;
        }
        else if(arr[k]==='R'){
            j++;
            temp[i][j]=2;
        }
        else{
            i--;
            temp[i][j]=2;
        }
    }
    temp[0][0]=3;
    temp[i][j]=4;
    return(<Solve mat={temp}/>);
}
function Print(props){
    var string=props.str;
    return(
        <div className="output">
            {string.map(handle_output)}
        </div>
    );
}
export default Print