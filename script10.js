
function quiz6(){

    // for are 
    let arre1=document.getElementById("arre1").value ;
    let arre2=document.getElementById("arre2").value ;
    // for i 
    let i1=document.getElementById("i1").value ;
    // for is 
    let iss1=document.getElementById("iss1").value ;
    let iss2=document.getElementById("iss2").value ;
    // for not 
    let noot1=document.getElementById("noot1").value ;
    let noot2=document.getElementById("noot2").value ;
    let noot3=document.getElementById("noot3").value ;
    // for arrent 
    let arentt1=document.getElementById("arentt1").value ;
    //  for we 
    let we1=document.getElementById("we1").value ;
    // for she 
    let she1=document.getElementById("she1").value;
    // for he 
    let he1=document.getElementById("he1").value;
    // for yes 
    let yes1=document.getElementById("yes1").value;
    // for isnt 
    let isnntt1=document.getElementById('isntt1').value;
    let isnntt2=document.getElementById('isntt2').value;
    // FOR iam 
    let am1=document.getElementById("amm1").value;
  
    // total 
    let total5=0;
  
    // start are
    if (arre1==="are" || arre1==="ARE" || arre1==="Are") {total5++};
    if (arre2==="are" || arre2==="ARE" || arre2==="Are") {total5++};
    //start i
    if (i1==="i" || i1==="I"){total5++};
    // start is 
    if (iss1==="is" || iss1==="IS" || iss1==="Is"){total5++};
    if (iss2==="is" || iss2==="IS" || iss2==="Is"){total5++};
    // StaRT NOT 
    if (noot1==="not" || noot1==="NOT"|| noot1==="Not"){total5++};
    if (noot2==="not" || noot2==="NOT"|| noot2==="Not"){total5++};
    if (noot3==="not" || noot3==="NOT"|| noot3==="Not"){total5++};
    // start we 
    if (we1==="we" || we1==="WE" ||we1==="We"){total5++};
    // start she
    if (she1==="she" ||she1==="SHE" || she1==="She"){total5++}
    // start he
    if (he1==="he" || he1==="HE" || he1==="He"){total5++};
    // start yes 
    if (yes1==="yes" || yes1==="YES"||yes1==='Yes'){total5++};
    // start isnt 
    if (isnntt1==="isn't" || isnntt1==="ISN'T" || isnntt1==="Isn't" || isnntt1==="isnt"){total5++};
    if (isnntt2==="isn't" || isnntt2==="ISN'T" || isnntt2==="Isn't" || isnntt2==="isnt"){total5++};
    // start for am 
    if (am1==="am" ||   am1==="AM" || am1==="Am"){total5++}
    // start arrent
    if (arentt1==="aren't" || arentt1==="AREN'T" || arentt1==="Aren't" || arentt1==='arent'){total5++};
    // persent 
    let per4= Math.ceil(total5*6.25)
    //if you get 100%
    if (per4==100){
      const x=document.getElementById("al")
      const y=document.getElementById("stage7")
      x.style.display="block"
      y.style.display="block"
    }
    else if (per4>=50){
      document.getElementById("close5").innerHTML=per4+"%"
      const x=document.getElementById("al1")
      x.style.display="block"
    }
    else{
      document.getElementById("far5").innerHTML=per4+"%"
      const x=document.getElementById("al2")
      x.style.display="block"
    }
}