import React from "react";
import '../App.css'

function Main6() {
 return (
   <main className='root' style={{color: 'white', display:'flex', justifyContent: 'space-between', margin:'100px 0px 100px 0px', backgroundColor:"#0070A0", }}>
    <div style={{padding:'100px'}}>
    <img src="src/assets/IMAGE (10).svg" alt="" />
   </div>

   <div style={{marginTop: '100px', fontWeight:'400', marginRight:'100px'}}>
    <p style={{margin: '0 0 30px 0', fontSize:'42px', lineHeight:'50.4px', width: '403px'}}>Set, forget, and then track.</p>
    <p style={{margin: '0', fontSize:'18px', lineHeight:'27px', width:'481px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ㅤsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div style={{paddingTop: '10px'}}>
      <img src="src/assets/vector.svg" alt="" /><span> Understand your options</span><br />
      <div style={{marginTop:'10px'}}><img src="src/assets/vector.svg" alt="" /><span> No lock-ins</span><br /></div>
      <div style={{marginTop:'12px'}}><img src="src/assets/vector.svg" alt="" /><span> You own the shares</span><br /></div>
   </div>
   <div style={{marginTop:'10px'}}>
    <button>Book a Demo</button>
   </div>
   </div>
   </main>
 );
}

export default Main6;