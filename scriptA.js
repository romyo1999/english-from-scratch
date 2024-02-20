function quizA1(){
  let aaa1=document.getElementById("aaa1").value ;
  let aaa2=document.getElementById("aaa2").value ;
  let aaa3=document.getElementById("aaa3").value ;
  let none1=document.getElementById("none1").value ;
  let none2=document.getElementById("none2").value ;
  let none3=document.getElementById("none3").value ;
  let ann1=document.getElementById("ann1").value ;
  let t1=0;
  if (aaa1==="a" || aaa1==="A"){t1++};
  if (aaa2==="a" || aaa2==="A"){t1++};
  if (aaa3==="a" || aaa3==="A"){t1++};
  if(none1==="none" || none1==="NONE" || none1===""){t1++};
  if(none2==="none" || none2==="NONE" || none2===""){t1++};
  if(none3==="none" || none3==="NONE" || none3===""){t1++};
  if (ann1==="an" || ann1==="AN" || ann1==="An"){t1++};
  let p=Math.ceil(t1*14.28)

  if (p==100){
    const x=document.getElementById("GA1")
    const y=document.getElementById("stageA2")
    x.style.display="block"
    y.style.display="block"
  }
  else if (p>=50){
    document.getElementById("c1").innerHTML=p+"%"
    const x=document.getElementById("GA2")
    x.style.display="block"

  }
  else{
    document.getElementById("f1").innerHTML=p+"%"
    const x=document.getElementById("GA3")
    x.style.display="block"

  }



}