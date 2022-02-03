import react,{useState} from 'react'
const Welcome=(props)=>{
    const [name,setName]=useState("")
    const getData=(e)=>{
    setName(e.target.value)
    }
return(
    <>
<div style={{
 width:"100vw",
 height:"100vh",
 border:"2px solid red",
 backgroundColor:"rgb(170, 71, 71)",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 flexDirection:"column"
}}>
<div style={{
    border:"2px solid rgba(238, 28, 28, 0.897)",
    width:"500px",
    height:"280px",
    backgroundColor:"rgb(240, 105, 105)",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
}}>
<h2 style={{color:"white",width:"100%",textAlign:"center",padding:"12px"}}>😘Welcome To EmojiCasino😘</h2>
<form onSubmit={(e)=>{
e.preventDefault()
if(name!="")
{
props.nameOfPlayer(name)
props.cngWin(true)
}
else{
    alert("Please Enter Your name")
}
}}>
<input type="text" style={{border:"2px solid rgba(238, 28, 28, 0.897)",
backgroundColor:"rgba(241, 34, 34, 0.897)",boxShadow:"2px 2px 8px black inset",padding:"12px",
marginTop:"79px",width:"320px"}} placeholder="Enter Your Name..." onChange={getData} value={name}/>
<button type="submit" style={{border:"2px solid rgba(238, 28, 28, 0.897)",
backgroundColor:"rgba(241, 34, 34, 0.897)",boxShadow:"2px 2px 8px black inset",padding:"12px",
marginTop:"79px",width:"75px"}}><b style={{color:"white"}}>Next</b></button>
</form>
</div>
</div>
    </>
)
}
export default Welcome