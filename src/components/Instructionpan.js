import react from 'react'
import Emojidata from './Emojidata'
let styleObj={
    width:"500px",
    height:"95px",
    backgroundColor: "rgba(209, 54, 54, 0.897)",
    boxShadow:  "2px 2px 29px black inset",
    padding:"30px 47px 25px",
    color:"White",
    textAlign:"center",
    paddingTop:"10px",
    marginTop:"60px"
}
const Instructionpan=(props)=>{
return(
<>
<div style={styleObj}>
<h2 >{props.Iindex==-1?`Hey!!! ${props.nameOfPlayer} select your Emoji...`:props.Icng==false?`${props.nameOfPlayer} your selected Emoji is ${Emojidata[props.Iindex]} click "Next" `:
`${props.nameOfPlayer} your selected Emoji is ${Emojidata[props.Iindex]} click "Start" to play`}</h2>
</div>
</>
)
    
}
export default Instructionpan