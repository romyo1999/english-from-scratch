function quiz4(){
  // FOR AM 
  let am1=document.getElementById("am1").value;
  let am2=document.getElementById("am2").value;
  let am3=document.getElementById("am3").value;
// for is 
let is1=document.getElementById("is1").value;
let is2=document.getElementById("is2").value;
let is3=document.getElementById("is3").value;
// FOR ARE 
let are1=document.getElementById("are1").value;
let are2=document.getElementById("are2").value;
let are3=document.getElementById("are3").value;
let are4=document.getElementById("are4").value;
let are5=document.getElementById("are5").value;
let are6=document.getElementById("are6").value;
// FOR TOTAL 
let total3=0;
if (am1==="am" || am1==="AM" || am1==="Am"){total3++};
if (am2==="am" || am2==="AM" || am2==="Am"){total3++};
if (am3==="am" || am3==="AM" || am3==="Am"){total3++};

// FOR IS 
if (is1==="is" || is1==="IS" || is1==="Is"){total3++};
if (is2==="is" || is2==="IS" || is2==="Is"){total3++};
if (is3==="is" || is3==="IS" || is3==="Is"){total3++};
//  for are 
if (are1==="are" || are1==="ARE" || are1==="Are"){total3++};
if (are2==="are" || are2==="ARE" || are2==="Are"){total3++};
if (are3==="are" || are3==="ARE" || are3==="Are"){total3++};
if (are4==="are" || are4==="ARE" || are4==="Are"){total3++};
if (are5==="are" || are5==="ARE" || are5==="Are"){total3++};
if (are6==="are" || are6==="ARE" || are6==="Are"){total3++};

// persent 
let per2=Math.ceil(total3*8.33)
    //if you get 100%
    if (per2==100){
      let a=document.getElementById('altrC')
      let b=document.getElementById('stage5')
      a.style.display='block'
      b.style.display='block'
      }
      //if you get more than 50% //
      else if (per2>=50){
        let a=document.getElementById('altrC1')
        document.getElementById('close3').innerHTML=per2+"%"
        a.style.display='block'
      }
      //if you get lise than 50% //
      else {
        let a=document.getElementById('altrC2')
        document.getElementById('far3').innerHTML=per2+"%"
        a.style.display='block'
      }



}