function quiz3(){
  //for these
  let these2=document.getElementById("these2").value;
  let these3=document.getElementById("these3").value;
  let these4=document.getElementById("these4").value;
  let these5=document.getElementById("these5").value;
  let these6=document.getElementById("these6").value;
  let these7=document.getElementById("these7").value;
  //for those
  let those2=document.getElementById("those2").value;
  let those3=document.getElementById("those3").value;
  let those4=document.getElementById("those4").value;
  let those5=document.getElementById("those5").value;
  let those6=document.getElementById("those6").value;
  let those7=document.getElementById("those7").value;
  let those8=document.getElementById("those8").value;
  //  condition these
  let total2=0;
  if (these2==='these' || these2==='THESE' || these2==='These'){total2++}
  if (these3==='these' || these3==='THESE' || these3==='These'){total2++}
  if (these4==='these' || these4==='THESE' || these4==='These'){total2++}
  if (these5==='these' || these5==='THESE' || these5==='These'){total2++}
  if (these6==='these' || these6==='THESE' || these6==='These'){total2++}
  if (these7==='these' || these7==='THESE' || these7==='These'){total2++}
  // CONDITION THOSE  
  if (those2==='those' || those2==='THOSE' || those2==='Those'){total2++}
  if (those3==='those' || those3==='THOSE' || those3==='Those'){total2++}
  if (those4==='those' || those4==='THOSE' || those4==='Those'){total2++}
  if (those5==='those' || those5==='THOSE' || those5==='Those'){total2++}
  if (those6==='those' || those6==='THOSE' || those6==='Those'){total2++}
  if (those7==='those' || those7==='THOSE' || those7==='Those'){total2++}
  if (those8==='those' || those8==='THOSE' || those8==='Those'){total2++}

  // PERSENT % 
  let per=Math.ceil(total2*7.69230769)
    //if you get 100%
    if (per==100){
      let a=document.getElementById('altrB')
      let b=document.getElementById('stage4')
      a.style.display='block'
      b.style.display='block'
      }
      //if you get more than 50% //
      else if (per>=50){
        let a=document.getElementById('altrB1')
        document.getElementById('close2').innerHTML=per+"%"
        a.style.display='block'
      }
      //if you get lise than 50% //
      else {
        let a=document.getElementById('altrB2')
        document.getElementById('far2').innerHTML=per+"%"
        a.style.display='block'
      }

  
}