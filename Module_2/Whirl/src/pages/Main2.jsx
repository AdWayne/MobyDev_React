import React from "react";
import '../App.css'

function Main2() {
 return (
   <main className="root" style={{color: 'black', textAlign:'center', margin:'100px 0px 50px 0px', fontWeight: '400', fontSize: '24px', lineHeight: '37.5px'}}>
    <p>Trusted by 50,000+ companies</p>
        <div style={{display: 'flex', gap: '50px', justifyContent: 'center', alignItems: 'center'}}>
            <img src="src/assets/IMAGE.svg" alt="" />
            <img src="src/assets/IMAGE (1).svg" alt="" />
            <img src="src/assets/IMAGE (2).svg" alt="" />
            <img src="src/assets/IMAGE (3).svg" alt="" />
        </div>
   </main>
 );
}

export default Main2;