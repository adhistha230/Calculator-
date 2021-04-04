console.log("this is my script");
let screen=document.getElementById('screen');
let btns = document.querySelectorAll('button');
let sv='';
for (item of btns){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='X'){
            buttonText='*';
            sv +=buttonText;
            screen.value=sv;
        }
        else if(buttonText == 'C'){
            sv="";
            screen.value=sv;
        }
        else if(buttonText== '='){
            screen.value = eval(sv);
        }
        else if(buttonText=='Back'){
            sv=sv.substring(0,sv.length-1);
            screen.value=sv;
        }
        else{
            sv+=buttonText;
            screen.value=sv;
        }
    })
}