import react,{useState} from 'react'
import Instructionpan from './Instructionpan'
import Emojidata from './Emojidata'
import Emgcard from './Emgcard'
import Gameplay from './Gameplay'
//import Displayresult from './Displayresult'
import Gamealgo from './Gamealgo'
import './Body.css'
var resultData
let boundaryObj={
    position:"absolute",
    border:"4px solid rgb(13 5 5 / 90%)",
    zIndex:"12",
    height: "60px",
    marginTop: "164px",
    width:"441px"
    //backgroundColor:"rgba(241, 34, 34)",
    //boxShadow:"2px 2px 29px black inset"
  }
const Body=(props)=>{
const [val1,setVal]=useState(-1);
const [cng,setCng]=useState(false);
const [start,setStart]=useState(false);
const [result,setResult]=useState(0);
const checkOpen=()=>{
    document.getElementById('openBar').style.width="10px"
}
const cngState=()=>{
    if(val1==-1)
    alert("Please select any emoji... ;) ");
    else if(cng==false){
    setCng(true);
    }
    else{
    setStart(true);
    }
}

return(
    <>
<div id="Body">
<Instructionpan
Iindex={val1}
Icng={cng}
nameOfPlayer={props.playerName}
/>

<div id="innerBody">
{cng==0?Emojidata.map((val,index)=>{
const setIndex=()=>{
    setVal(index);
}
return(
<div id="EmgCard" style={{display:"flex",flexDirection:"column",color:"white"}} onClick={setIndex}>
    <Emgcard
    Emoji={val}
    Eindex={index}
    />
</div>
    )

}):
<>
<Gameplay gameStart={start}  styleFun={checkOpen} finalRes={result}/>
<div style={boundaryObj}>
<div id="openBar">
</div>
<Gamealgo startGame={start} selectedEmoji={val1} resFun={setResult} />
</div>
</>
}
</div>
<div id="btnContainer" onClick={cngState}>
<h2 style={{color:"white"}}>{cng==0?"Next":"Start"}</h2>
</div>
</div>
</>
)
}
export default Body