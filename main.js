let b,x;
function num(a) {
    b=+a;             
    document.getElementById('textarea').innerHTML=a;    
}
function operation(sign){            
    num1=+document.getElementById('textarea').innerHTML;    
    if(sign=='+'){
        x='plus';        
    }else if(sign=='-'){
        x='minus';        
    }else if(sign=='*'){
        x='multiplication';        
    }else if(sign=='/'){
        x='division';
    }
}
function ravno(rav){
    switch(x){
        case "plus":
                resultNum = num1+b;
                console.log(resultNum);
                document.getElementById('textarea').innerHTML=resultNum;
                break;

        case "minus":
                resultNum = num1-b;
                console.log(resultNum);
                document.getElementById('textarea').innerHTML=resultNum;
                break;

        case "division":
            if(b!==0){
                resultNum = num1/b;
                console.log(resultNum); 
            } else{
                resultNum='на ноль делить нельзя'; 
                console.log(resultNum);
            }               
                document.getElementById('textarea').innerHTML=resultNum;
                break;

        case "multiplication":
                resultNum = num1*b;
                console.log(resultNum);
                document.getElementById('textarea').innerHTML=resultNum;
                break;
    } 
}

