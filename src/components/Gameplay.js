import react,{useState} from 'react'
import Emojidata from './Emojidata'
//import Displayresult from './Displayresult'
let carrierObj={
border:"3px solid rgba(238, 28, 28, 0.897)",
height:"449px",
width:"500px",
display:"flex",
justifyContent:"space-evenly"
}
let boxObj={
    height:"445px",
    width:"95px",
    overflow:"hidden",
    backgroundColor:"rgb(240, 105, 105)",
    zIndex:"2"
}
const Emgcarrier=(props)=>{
  var stop1,stop2,stop3
  if(props.start==true)
  {
    stop1=setInterval(()=>{
    var endX=setInterval(()=>{
      document.getElementById('d1').scrollBy(0,1);
      if(document.getElementById('d1').scrollTop>=500){
        clearInterval(endX) 
        var endX1=setInterval(()=>{
          document.getElementById('d1').scrollBy(0,-1);
          if(document.getElementById('d1').scrollTop==0)
          clearInterval(endX1) 
        },5)
      }
    },5)
  },7)
  stop2=setInterval(()=>{
    var endX=setInterval(()=>{
      document.getElementById('d2').scrollBy(0,1);
      if(document.getElementById('d2').scrollTop>=500){
        clearInterval(endX) 
        var endX1=setInterval(()=>{
          document.getElementById('d2').scrollBy(0,-1);
          if(document.getElementById('d2').scrollTop==0)
          clearInterval(endX1) 
        },5)
      }
    },5)
  },7)
  stop3=setInterval(()=>{
    var endX=setInterval(()=>{
      document.getElementById('d3').scrollBy(0,1);
      if(document.getElementById('d3').scrollTop>=500){
        clearInterval(endX) 
        var endX1=setInterval(()=>{
          document.getElementById('d3').scrollBy(0,-1);
          if(document.getElementById('d3').scrollTop==0)
          clearInterval(endX1) 
        },5)
      }
    },5)
  },7)
  setTimeout(()=>{
    clearInterval(stop1); 
    clearInterval(stop2); 
    clearInterval(stop3); 
    setTimeout(()=>{
   props.openBarStyleFun();
   if(props.resData!=0){
   if(props.resData==-1)
   {
     alert("🙁Sorry !!! Better Luck next time🙁")
   }
   else{
    alert("🥳Hey !!! Match found🥳")
   }
   }
    },4000)
  },2000)
  }
    return(
        <>
      <div id="d1" style={boxObj}>
     {
        Emojidata.map((val)=>{
          return(
              <>
              <span style={{fontSize:"40px",paddingLeft:"21px",zIndex:"6"}}>{val}</span>
              </>
          )
        })
        } 
      </div>
      <div id="d2" style={boxObj}>
     {
        Emojidata.map((val)=>{
          return(
              <>
              <span style={{fontSize:"40px",paddingLeft:"21px"}}>{val}</span>
              </>
          )
        })
        } 
      </div>
      <div id="d3" style={boxObj}>
     {
        Emojidata.map((val)=>{
          return(
              <>
              <span style={{fontSize:"40px",paddingLeft:"21px"}}>{val}</span>
              </>
          )
        })
        } 
      </div>
    </>
    )
}
//<Displayresult result={props.finalResult}/>
const Gameplay=(props)=>{
return(
<>
<div id="carrier" style={carrierObj}>
<Emgcarrier start={props.gameStart} openBarStyleFun={props.styleFun} resData={props.finalRes}/>
</div>
</>
)
}
export default Gameplay