clear=true;
res=0;
lastSing="+";
function nums(val){
    if(clear){
        display.value=""; clear=false;
    }
    display.value=display.value+val;
}
function signs(sign){
    
        if(lastSing=="+"){
            res+=Number(display.value);
        }else if(lastSing=="-"){
            res-=Number(display.value);
        }else if(lastSing=="*"){
            res*=Number(display.value);
        }else if(lastSing=="/"){
            res/=Number(display.value);
        } display.value=res; lastSing=sign; clear=true
    
}
function clearCalc(){    display.value=0; res=0; clear=true; lastSing="+"    }