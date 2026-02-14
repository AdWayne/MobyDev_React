import React from "react";
import '../App.css'

function Main() {
 return (
   <main className="root" style={{color: 'black', display:'flex', justifyContent: 'space-between', margin:'100px 0px 50px 0px'}}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontWeight: '400'}}>
    <p style={{fontFamily: 'Fraunces', fontSize: '58px', width:'485px', margin: '0'}}>Your everyday tasks, automated.</p>
    <p style={{width: '351px', fontSize:'20px'}}>Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.</p>
    <div style={{display: 'flex', direction: 'row', gap: '10px'}}>
    <button>Book a demo</button>
    <button style={{backgroundColor:'white', color: '#0070A0', width: '110px'}}>Learn more <img src="src/assets/right.svg" alt="" /></button>
    </div>
    </div>
    <img style={{position:'relative', top: '-40px'}}src="src/assets/1.svg" alt="" />
   </main>
 );
}

export default Main;