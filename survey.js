const q = document.getElementById('surveyq');
const ch = Array.from(document.getElementsByClassName('option-label'));
//console.log(ch);
const maxq = 2;
let cq = {};
let aa=false;
let sqc=0;
let aq=[];
let sq = 
[
  {
    question:'Rate your love for Axelerant',
    option1:'3',
    option2:'25',
    option3:'Eww!',
    option4:'Infinte',
  },
  {
    question:'Your Favourite Author ?',
    option1:'Stephen-King',
    option2:'Robert-Ludlum',
    option3:'Malcolm-Gladwell',
    option4:'Abhi Goel & Ankur Gupta',
  }
];
function getInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

startSurvey=()=>
{
  sqc=0;
  aq=[...sq];
  getsq();
}
getsq=()=>
{
  if(aq.length ===0 | sqc >= maxq)
  {
    return window.location.assign('/results.html');
  }
  sqc++;
  const qI = getInt(0,1);
  cq=aq[qI];
  q.innerText=cq.question;
  ch.forEach(ch=>{
    const num = ch.dataset['number'];
    ch.innerText=cq["option" + num];
  });
  aq.splice(qI,1);
  aa=true;
};

ch.forEach(ch=>
  {
    ch.addEventListener('click',e =>
    {
      if(!aa) return;
      aa=false;
      const sc=e.target;
      var myjson=console.log(JSON.stringify(sc));
      const sa=sc.dataset['number'];
      
      getsq();
    });
  });
startSurvey();

