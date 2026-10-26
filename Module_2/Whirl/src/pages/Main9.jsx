import React from "react";

function Main9(){
    return (
   <main className="root" style={{color: 'black', display:'flex', justifyContent: 'space-between', margin:'100px 0px 50px 0px', fontWeight:'400', fontFamily:'Fraunces'}}>
    <div style={{backgroundColor:'#E6F7FF', width:'100%'}}>
        <div style={{margin:'50px'}}>
            <p style={{margin:'0', fontSize:'42px', lineHeight:'50.4px', letterSpacing:'0.2px'}}>Get started with Whirl</p>
            <p style={{fontFamily:'Inter', fontSize:'18px', lineHeight:'27px', letterSpacing:'0.2px', width:'481px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ㅤㅤㅤsed do eiusmod tempor incididunt.</p>
            <button style={{height:'43px', width:'174px'}}>Book a demo</button>
            <div style={{display:'flex'}}>
            <div style={{width:'128px', height:'21px'}}>
                <img style={{ marginTop:'20px'}}src="src/assets/Rightlast.svg" alt="" /><span style={{ color:'#626A72'}}> Free 30-day trial</span>
            </div>
            <div>
                <img style={{marginTop:'20px', marginLeft:'35px'}}src="src/assets/Rightlast.svg" alt="" /><span style={{ color:'#626A72'}}> No credit-card required</span>
            </div>
            </div>
        </div>
    </div>
   </main>
    )
}
export default Main9;