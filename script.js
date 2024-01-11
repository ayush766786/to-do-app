let date=document.getElementById('date');
date.max=new Date().toISOString().split('T')[0]
let result=document.getElementById('result');
let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
  let DateOfBirth=new Date(date.value);
  let d1=DateOfBirth.getDate();
  let m1=DateOfBirth.getMonth()+1;
  let y1=DateOfBirth.getFullYear();

  let todaysDate=new Date();
  let d2=todaysDate.getDate();
  let m2=todaysDate.getMonth()+1;
  let y2=todaysDate.getFullYear();

  let d3,m3,y3
  y3=y2-y1;
  if(m2>=m1){
    m3=m2-m1;
  }else{
    y3--
    m3=12+m2-m1;
  }
  if(d2>=d1){
    d3=d2-d1;
  }else{
     m3--;
     d3=getDayInMonth(y1,m1)+d2-d1;
  }
  if(m3<0){
    m3=11;
    y3--
  }
  result.innerHTML=`You are ${y3} Year  ,${m3} month , and ${d3} days old`;
  ayush();
})
function getDayInMonth(year,month){
  return new Date(year,month,0).getDate();
}

function ayush(){
  localStorage.setItem('data',result.innerHTML)
}
function kumar(){
  result.innerHTML=localStorage.getItem('data');
}
kumar()