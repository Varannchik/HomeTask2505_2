let b,x,num1,elem;

function num(a) {    
    let elem=document.getElementById('textarea');    
    elem.innerText=elem.innerText+a;            
}
function operation(sign){
    b=+document.getElementById('textarea').innerHTML;
    console.log(b);
    document.getElementById('textarea').innerHTML='';
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
    let num1=+document.getElementById('textarea').innerHTML;
    console.log(num1);    
    switch(x){
        case "plus":
                resultNum = b+num1;                
                document.getElementById('textarea').innerHTML=resultNum;
                break;

        case "minus":
                resultNum = b-num1;                
                document.getElementById('textarea').innerHTML=resultNum;
                break;

        case "division":
            if(num1!==0){
                resultNum = b/num1;                 
            } else{
                resultNum='на ноль делить нельзя';
            }               
                document.getElementById('textarea').innerHTML=resultNum;
                break;

        case "multiplication":
                resultNum = b*num1;               
                document.getElementById('textarea').innerHTML=resultNum;
                break;
    } 
}

