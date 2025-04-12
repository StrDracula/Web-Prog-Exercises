let out=0;
let n1=0;
let n2=0;
function numinpn1(){
    n1=parseInt(prompt("Enter the number here"));
}
function numinpn2(){
    n2=parseInt(prompt("Enter the number here"));
}
function add(){
    out=n1+n2
}
function sub(){
    out=n1-n2
}
function mul(){
    out=n1*n2
}
function div(){
    if(n2==0){
        alert("The second number is zero, Division Not Possible");
    }
    else{
        out=n1/n2;
    }
}
function calc(){
    alert("The result is "+out);
}