function quiz7(){
  let where1=document.getElementById("where1").value ;
  let where2=document.getElementById("where2").value ;
  let what1=document.getElementById("what1").value ;
  let what2=document.getElementById("what2").value ;
  let how1=document.getElementById("how1").value ;
  let why1=document.getElementById("why1").value;
  let who1=document.getElementById("who1").value ;
  // total 
  let total6=0;

  if (where1==="where" || where1===" WHERE" || where1==="Where"){total6++};
  if (where2==="where" || where2===" WHERE" || where2==="Where"){total6++};

  if (what1==="what" || what1==="WHAT" || what1==="What"){total6++};
  if (what2==="what" || what2==="WHAT" || what2==="What"){total6++};

  if (how1==="how" || how1==="HOW"|| how1==="How" || how1==="where"){total6++};

  if (why1==="why" || why1==="WHY" || why1==="Why"){total6++};

  if (who1==="who" || who1==="WHO" || who1==="Who" || who1==="where"){total6++};

  // persent 
  let per5=Math.ceil(total6*14.28)
  if (per5==100){
    const x=document.getElementById("all")
    x.style.display="block"
  }
  else if (per5>=50){
    document.getElementById("close6").innerHTML=per5+"%"
    const x=document.getElementById("all1")
    x.style.display="block"
  }
  else{
    document.getElementById("far6").innerHTML=per5+"%"
    const x=document.getElementById("all2")
    x.style.display="block"
  }
}