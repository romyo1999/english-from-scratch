function quiz2(){
  let this1=document.getElementById('this1').value;
  let this2=document.getElementById('this2').value;
  let that1=document.getElementById('that1').value;
  let that2=document.getElementById('that2').value;
  let an_1=document.getElementById('an_1').value;
  let a_1=document.getElementById('a_1').value;
  let a_2=document.getElementById('a_2').value;
  let a_3=document.getElementById('a_3').value;

  let total2=0;

  if(this1==='this' || this1==='THIS' || this1==='This'){total2++}
  if(this2==='this' || this2==='THIS' || this2==='This'){total2++}
  if(that1==='that' || that1==='THAT' || that1==='That'){total2++}
  if(that2==='that' || that2==='THAT' || that2==='That'){total2++}
  if(an_1==='an' || an_1==='An' || an_1==='AN'){total2++}
  if(a_1==='a' || a_1==='A'){total2++}
  if(a_2==='a' || a_2==='A'){total2++}
  if(a_3==='a' || a_3==='A'){total2++}

  let persent=parseInt(total2*12.5)

  if (persent==100){
    let a=document.getElementById('altrA')
    let b=document.getElementById('stage3')
    a.style.display='block'
    b.style.display='block'
  }

  else if (persent>=50){
    let a=document.getElementById('altrA1')
    document.getElementById('close1').innerHTML=persent+"%"
    a.style.display='block'
  }
  //if you get lise than 50% //
  else {
    let a=document.getElementById('altrA2')
    document.getElementById('far1').innerHTML=persent+"%"
    a.style.display='block'
  }
}