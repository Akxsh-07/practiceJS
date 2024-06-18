let out=0;
document.getElementById('output').textContent=out;
document.getElementById('inc').onclick=function(){
    out+=1;
    document.getElementById('output').textContent=out;
}
document.getElementById('dec').onclick=function(){
    out-=1;
    document.getElementById('output').textContent=out;
}
document.getElementById('reset').onclick=function(){
    out=0;
    document.getElementById('output').textContent=out;
}