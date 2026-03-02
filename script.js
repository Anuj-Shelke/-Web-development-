let val = 61; 
function getGrade(val){
    if(val>90){
        console.log("A"); 
    }
    else if(val>60){
        console.log("B");
    }
    else if(val>35){
        console.log("C");
    }
    else{
        console.log("Fail");
    }
}
getGrade(val); 