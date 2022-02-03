import Emojidata from './Emojidata'
import react,{useState} from 'react'
var  flag=-1
var counter=0
var searchEmg=-1
var arrAlgo=[
    {
        arr:new Array(8)
    },
    {
        arr:new Array(8)
    },
    {
        arr:new Array(8)
    },
    {
        arr:new Array(8)
    },
    {
        arr:new Array(8)
    }
]
function Gamealgo(props)
{
const [res,setRes]=useState(-1)
let l=-1;// Replace it
for(var i=0;i<5;i++)
{
for(var j=0;j<8;j++)
{
   arrAlgo[i].arr[j]=Emojidata[Math.floor(Math.random()*41)] 
}
}
if(props.startGame==true)
{  
//     console.log("Required Data : "+Emojidata[props.selectedEmoji]);
// console.log("Refn table");
//     for(var i=0;i<5;i++)
//     {
//         console.log("array No : "+(i));
//         for(var j=0;j<8;j++)
//         {
//     console.log(arrAlgo[i].arr[j]);
//         }
//     }
    var k
    while(counter<=1)
    {
    searchEmg=Math.floor(Math.random()*5)
     for(k=0;k<8;k++)
     {
      if(arrAlgo[searchEmg].arr[k]==Emojidata[props.selectedEmoji]){
      flag=k
      break;
      }
    //  console.log("Found at arr no "+searchEmg+" index no "+j);   
     }
    if(flag>=0){
    //console.log("Data found at array at locn : "+searchEmg+" "+flag); 
    flag=arrAlgo[searchEmg].arr[flag];
    break;
    }
    // else{
    // //console.log("not found")
    // }
    counter+=1;
    }
   var end= setTimeout(()=>{
    setRes(flag)
    props.resFun(flag)
    clearTimeout(end)
    },2050)
    return (
        <>
        <div style={{ 
            display:"flex",
            marginTop:"-8px",
            justifyContent:"space-evenly",
        }}>
        <h1 style={{fontSize:"50px",marginLeft:"-10px"}}>{res!=-1?res:Emojidata[Math.floor(Math.random()*20)]}</h1>
        <h1 style={{fontSize:"50px",marginRight:"-8px"}}>{res!=-1?res:Emojidata[Math.floor(Math.random()*30)]}</h1>
        <h1 style={{fontSize:"50px",marginRight:"-13px"}}>{res!=-1?res:Emojidata[Math.floor(Math.random()*40)]}</h1>
        </div>
        </>
        )
    }else{
    return (
        <></>
    )
    }
}
export default Gamealgo