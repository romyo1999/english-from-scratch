function quiz1(){
  // the values who a is the ansewr//
  let a1=document.getElementById("a1").value;
  let a2=document.getElementById("a2").value;
  let a3=document.getElementById("a3").value;
  let a4=document.getElementById("a4").value;
  let a5=document.getElementById("a5").value;
  let a6=document.getElementById("a6").value;
  let a7=document.getElementById("a7").value;
  
  // the values who an is the ansewr//
  let an1=document.getElementById("an1").value;
  let an2=document.getElementById("an2").value;
  let an3=document.getElementById("an3").value;
  let an4=document.getElementById("an4").value;
  let an5=document.getElementById("an5").value;
  let an6=document.getElementById("an6").value;
  let an7=document.getElementById("an7").value;
  let an8=document.getElementById("an8").value;
  let an9=document.getElementById("an9").value;
  
  // start calcule the resultat for a//
  var total =0 ;
  if (a1==='a' || a7==='A'){total++}
  if (a2==='a' || a7==='A'){total++}
  if (a3==='a' || a7==='A'){total++}
  if (a4==='a' || a7==='A'){total++}
  if (a5==='a' || a7==='A'){total++}
  if (a6==='a' || a7==='A'){total++}
  if (a7==='a' || a7==='A'){total++}

  // start calcule the resultat for an //
  if (an1==='a' || an1==='A'){total++}
  if (an2==='an'|| an2==='AN' || an2==='An' ){total++}
  if (an3==='an'|| an3==='AN' || an3==='An' ){total++}
  if (an4==='an'|| an4==='AN' || an4==='An' ){total++}
  if (an5==='an'|| an5==='AN' || an5==='An' ){total++}
  if (an6==='an'|| an6==='AN' || an6==='An' ){total++}
  if (an7==='an'|| an7==='AN' || an7==='An' ){total++}
  if (an8==='an'|| an8==='AN' || an8==='An' ){total++}
  if (an9==='an'|| an9==='AN' || an9==='An' ){total++}

  let fintotal=parseInt(total*(6.25));
  //if you get 100%
  if (fintotal==100){
  let a=document.getElementById('altr')
  let b=document.getElementById('stage2')
  a.style.display='block'
  b.style.display='block'
  }
  //if you get more than 50% //
  else if (fintotal>=50){
    let a=document.getElementById('altr1')
    document.getElementById('close').innerHTML=fintotal+"%"
    a.style.display='block'
  }
  //if you get lise than 50% //
  else {
    let a=document.getElementById('altr2')
    document.getElementById('far').innerHTML=fintotal+"%"
    a.style.display='block'
  }
}
