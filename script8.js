function quiz5(){
  // for not 
  let not1=document.getElementById("not1").value;
  let not2=document.getElementById("not2").value;
  let not3=document.getElementById("not3").value;
  let not4=document.getElementById("not4").value;
  let not5=document.getElementById("not5").value;
  // FOR ARENT 
  let arent1=document.getElementById("arent1").value;
  let arent2=document.getElementById("arent2").value;
  let arent3=document.getElementById("arent3").value;
  let arent4=document.getElementById("arent4").value;
  // FOR ISNT 
  let isnt1=document.getElementById("isnt1").value;
  let isnt2=document.getElementById("isnt2").value;
  // for total 
  let total4=0 ;
  // start for not 
  if (not1==='not' || not1==='NOT' || not1==='Not'){total4++};
  if (not2==='not' || not2==='NOT' || not2==='Not'){total4++};
  if (not3==='not' || not3==='NOT' || not3==='Not'){total4++};
  if (not4==='not' || not4==='NOT' || not4==='Not'){total4++};
  if (not5==='not' || not5==='NOT' || not5==='Not'){total4++};

  // START FOR ARENT 
  if (arent1==="aren't" || arent1==="AREN'T" || arent1=="Aren't" || arent1=="arent"){total4++};
  if (arent2==="aren't" || arent2==="AREN'T" || arent2=="Aren't" || arent2=="arent"){total4++};
  if (arent3==="aren't" || arent3==="AREN'T" || arent3=="Aren't" || arent3=="arent"){total4++};
  if (arent4==="aren't" || arent4==="AREN'T" || arent4=="Aren't" || arent4=="arent"){total4++};

// start for isnt 
  if (isnt1==="isn't" || isnt1==="ISN'T" || isnt1==="Isn't" ||isnt1==="isnt"){total4++};
  if (isnt2==="isn't" || isnt2==="ISN'T" || isnt2==="Isn't" ||isnt2==="isnt"){total4++};

// persent 
let per3=Math.ceil(total4*9.09)
    //if you get 100%
    if (per3==100){
      let a=document.getElementById('altrD')
      let b=document.getElementById('stage6')
      a.style.display='block'
      b.style.display='block'
      }
      //if you get more than 50% //
      else if (per3>=50){
        let a=document.getElementById('altrD1')
        document.getElementById('close4').innerHTML=per3+"%"
        a.style.display='block'
      }
      //if you get lise than 50% //
      else {
        let a=document.getElementById('altrD2')
        document.getElementById('far4').innerHTML=per3+"%"
        a.style.display='block'
      }




}