import React from "react";
import '../App.css'

function Main5() {
 return (
   <main className='root' style={{color: 'black', display:'flex', justifyContent: 'space-between', margin:'100px 0px 50px 0px', fontFamily:'Fraunces', fontWeight:'400'}}>
    <div>
      <p style={{fontSize:'42px', margin: '0'}}>What's Whirl</p>
      <p style={{fontSize:'42px', margin: '0'}}>all about?</p>
    </div>
    <div style={{display:'flex', flexDirection:'row', gap:'50px'}}>
    <div className="card1">
      <div style={{marginTop: '40px'}}>ㅤ</div>
      <p style={{fontSize:'25px', margin:'0'}}>All on one place.</p>
      <p style={{fontSize:'15px', margin:'0'}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div className="card1">
      <div><img src="src/assets/IMAGE (8).svg" alt="" /></div>
      <p style={{fontSize:'25px', margin:'0'}}>Get daily alerts.</p>
      <p style={{fontSize:'15px', margin:'0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>

    <div className="card1">
      <div><img src="src/assets/IMAGE (9).svg" alt="" /></div>
      <p style={{fontSize:'25px', margin:'0'}}>Safe and secure.</p>
      <p style={{fontSize:'15px', margin:'0'}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
   </main>
 );
}

export default Main5;