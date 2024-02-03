//selecting input tag
let result=document.getElementById("inputtext");


let calculator=(number)=>{
    result.value=result.value+number;
}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid Input");
    }
}

function clr(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0,-1);
}