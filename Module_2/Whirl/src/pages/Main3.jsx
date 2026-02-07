import React from "react";
import '../App.css'

function Main3() {
 return (
   <article className="root" style={{color: '#1F1F1F', display:'flex', justifyContent: 'space-between', margin:'100px 0px 50px 0px'}}>
    <div className="card" style={{backgroundColor: '#FAEA73'}}>
        <img style={{margin: '20px 30px 0'}}src="src/assets/Fast.svg" alt="" />
        <p style={{margin: '10px 0 0 30px', fontFamily: 'Fraunces', fontSize:'25px', lineHeight:'31.25px'}}>Fast. Really fast.</p>
        <p style={{margin: '10px 0 0 30px', fontSize: '15px', lineHeight: '24px', width: '287px'}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ㅤaliquip ex ea commodo consequat.</p>
    </div>
    <div className="card" style={{backgroundColor: '#CCEFF6'}}>
        <img style={{margin: '20px 30px 0'}}src="src/assets/Money.svg" alt="" />
        <p style={{margin: '10px 0 0 30px', fontFamily: 'Fraunces', fontSize:'25px', lineHeight:'31.25px'}}>More bang for buck.</p>
        <p style={{margin: '10px 0 0 30px', fontSize: '15px', lineHeight: '24px', width: '287px'}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ㅤaliquip ex ea commodo consequat.</p>
    </div>
    <div className="card" style={{backgroundColor: '#F7CEDC'}}>
        <img style={{margin: '20px 30px 0'}}src="src/assets/Ok.svg" alt="" />
        <p style={{margin: '10px 0 0 30px', fontFamily: 'Fraunces', fontSize:'25px', lineHeight:'31.25px'}}>Safe and secure.</p>
        <p style={{margin: '10px 0 0 30px', fontSize: '15px', lineHeight: '24px', width: '287px'}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ㅤaliquip ex ea commodo consequat.</p>
    </div>
   </article>
 );
}

export default Main3;