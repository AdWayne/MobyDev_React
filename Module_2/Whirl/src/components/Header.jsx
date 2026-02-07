import React from "react";

function Header(){
    return (
        <div className="root">
        <div style={{display: 'flex', gap: '20px', alignItems: 'center', width: '100%', height: '75px'}}>
            <img src="src/assets/logo.svg" alt="logo" />
            <div style={{display: 'flex', gap: '20px'}}>
                <p style={{margin: 0, color: '#33383F', fontSize: '15px', fontWeight:'400'}}>Features</p>
                <p style={{margin: 0, color: '#33383F', fontSize: '15px', fontWeight:'400'}}>Pricing</p>
                <p style={{margin: 0, color: '#33383F', fontSize: '15px', fontWeight:'400'}}>Integrations</p>
                <p style={{margin: 0, color: '#33383F', fontSize: '15px', fontWeight:'400'}}>Learn</p>
            </div>
            <div style={{flex: 1}}></div>
            <div style={{display: 'flex', gap: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '49px', height: '36px', cursor: 'pointer'}}>
                    <p style={{color: '#0070A0', fontSize: '15px', fontWeight: '400', margin: 0}}>Sign in</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '139px', height: '36px', backgroundColor: '#0070A0',cursor: 'pointer'}}>
                    <p style={{color: '#FFFFFF', fontSize: '15px', fontWeight: '400', margin: 0}}>Book a demo</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Header;