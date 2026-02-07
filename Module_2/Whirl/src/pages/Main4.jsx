import React from "react";
import '../App.css'

function Main4() {
 return (
   <main className="root" style={{fontFamily:'Fraunces', backgroundColor: '#F7F9FA', color: 'black', margin:'100px 0px 50px 0px', fontWeight:'400', letterSpacing:'0.2px'}}>
    <div style={{paddingTop:"80px"}}>
        <p style={{fontSize:'42px', lineHeight:'50.4px', letterSpacing: '0.2px', margin: '0'}}>We will take care of everything,</p>
        <p style={{fontSize:'39px', lineHeight:'50.4px', letterSpacing: '0.5px', margin: '0'}}>so you can get back to relaxing.</p>  
    </div>
    <div style={{display:'flex', justifyContent: 'space-between', width:'1166px', marginTop:'50px'}}>
    <div style={{height:'345px', width:'485.5px'}}>
        <div className="border-top-bottom"> 
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', margin:'10px'}}>
            <img src="src/assets/IMAGE (4).svg" alt="" />
            <p style={{margin: '0', fontSize:'21px'}}>Anti-loss technology</p>
            <img style={{marginLeft: '170px'}}src="src/assets/down.svg" alt="" />
            </div>
            <p style={{margin:'10px 51px', width:'363px', fontSize:'16px', lineHeight:'24px', fontWeight:'400'}}>Lorem ipsum dolor sit amet, consectetur ㅤㅤadipiscing elit, sed do eiusmod tempor ㅤㅤㅤincididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="border-top-bottom"> 
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', margin:'10px'}}>
            <img src="src/assets/IMAGE (5).svg" alt="" />
            <p style={{margin: '0', fontSize:'21px', color: '#626A72'}}>Exchange easily</p>
            <img style={{marginLeft: '210px'}}src="src/assets/down.svg" alt="" />
            </div>
        </div>

        <div className="border-top-bottom"> 
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', margin:'10px'}}>
            <img src="src/assets/IMAGE (6).svg" alt="" />
            <p style={{margin: '0', fontSize:'21px', color: '#626A72'}}>Fully encrypted</p>
            <img style={{marginLeft: '214px'}}src="src/assets/down.svg" alt="" />
            </div>
        </div>

        <div className="border-top-bottom"> 
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', margin:'10px'}}>
            <img src="src/assets/IMAGE (7).svg" alt="" />
            <p style={{margin: '0', fontSize:'21px', color: '#626A72'}}>Plenty of options</p>
            <img style={{marginLeft: '203px'}}src="src/assets/down.svg" alt="" />
            </div>
        </div>
        </div>
        <div><img style={{position:'relative', top: '-110px'}}src="src/assets/comp.svg" alt="" /></div>
    </div>
   </main>
 );
}

export default Main4;