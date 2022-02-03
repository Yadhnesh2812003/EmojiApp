import react from 'react'
const Emgcard=(props)=>{
return(
<>
<span style={{fontSize:"40px"}}>{props.Emoji}</span>
<span style={{fontSize:"20px",textAlign:"center"}}>{(props.Eindex+1)}</span>
</>
)
}
export default Emgcard