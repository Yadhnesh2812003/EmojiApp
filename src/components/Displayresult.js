import react,{useState} from 'react'
import Emojidata from './Emojidata'
//import Gamealgo,{flag} from './Gamealgo'
let boundaryObj={
    position:"absolute",
    zIndex:"5",
    border:"3px solid rgba(238, 28, 28, 0.897)",
    width:"441px",
    height:"55px",
    marginTop:"163px",
    backgroundColor:"rgba(241, 34, 34, 0.08)",
    boxShadow:"2px 2px 29px black inset"
  }
const Displayresult=(props)=>{
return(
<>
<h1>{props.lastResult}</h1>
</>        
) 
//else{
}
export default Displayresult