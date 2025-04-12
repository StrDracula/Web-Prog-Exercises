function calc(){
  let ad=document.getElementById("adults").value;
  let ch=document.getElementById("children").value;

  if(parseInt(ad)){
    if(parseInt(ch)){
      let adc=parseInt(ad);
      let chc=parseInt(ch);
      sum=10*adc+5*chc;
      let c = String.fromCharCode(8377);
      document.getElementById("total").value=c+" "+sum;
    }
    else{
      alert("Number of children is not a number");
    }
  }
  else{
    alert("Number of adults is not a number");
  }
}