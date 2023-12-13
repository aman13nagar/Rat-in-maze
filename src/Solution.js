import React from "react";
import Print from "./print";
import matrix from "./matrix";
function Solution(){
    var string=[];
    let s=[];
    let n=matrix.length,m=matrix[0].length;
    let track=Array(n).fill().map(()=>Array(m).fill(0));
    find_path(0,0,s);
    function find_path(i,j,s){
        if(i>=n || i<0 || j>=m || j<0 || matrix[i][j]!==1 || track[i][j]!==0){
            return;
        }
        if(i===n-1 && j===m-1){
            string.push(s);
        }
        else{
            track[i][j]=1;
            let p=s;
            s+='D';
            find_path(i+1,j,s);
            s="";
            s+=p;
            s+='L';
            find_path(i,j-1,s);
            s="";
            s+=p;
            s+='R';
            find_path(i,j+1,s);
            s="";
            s+=p;
            s+='U';
            find_path(i-1,j,s);
            s="";
            s+=p;
            track[i][j]=0;
        }
        return;
    }
    return(
        <div class="text">
            <h1>Total path ={string.length}</h1>
            <Print str={string}/>
        </div>
    );
}

export default Solution