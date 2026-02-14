import React from "react";

function Footer() {
 return (
  <footer className="root" style={{color: 'white', textAlign: 'left', marginTop: '20px' }}>
    <div style={{display: 'flex', gap: '150px', justifyContent: 'flex-start', width: '100%'}}>
        <div style={{width: '500px', height: '216px'}}>
            <div style={{display: 'flex'}}>
                <img src="src/assets/logo.svg" alt="logo" />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px', alignItems: 'flex-start'}}>
                <p style={{color: '#1F1F1F', margin: 0}}>Built by <span style={{color:'#0070A0'}}>Nikolai Bain.</span></p>
                <p style={{color: '#1F1F1F', margin: 0}}>Powered by <span style={{color:'#0070A0'}}>Webflow.</span></p>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start'}}>
            <p style={{color: '#1F1F1F', margin: '0', fontSize: '15px', fontWeight: '400'}}>Info</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Features</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Pricing</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Blog</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Support</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Terms & Conditions</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Privacy Policy</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start'}}>
            <p style={{color: '#1F1F1F', margin: '0', fontSize: '15px', fontWeight: '400'}}>Admin</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Style Guide</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Licenses</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Instructions</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Changelog</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>Password</p>
            <p style={{color: '#626A72', fontSize: '14px', fontWeight: '400', margin: 0}}>404</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <p style={{color: '#1F1F1F', fontSize: '15px', margin: '0', fontWeight: '400'}}>Newsletter</p>
            <p style={{color: '#1F1F1F', fontSize: '16px', width: '200px', fontWeight: '400', textAlign: 'left', marginTop: '1px'}}>Sign up for the latest news, company insights, and Whirl updates.</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px'}}>
                    <input style={{border: 'none', borderBottom: '1px solid #C2CDD8', padding: '6px 10px 4px 0', outline: 'none', background: 'transparent'}} placeholder="Your email" type="email"/>
                        <img src="src/assets/right.svg" alt="" />
                </div>
        </div>
    </div>
    <hr style={{border: '1px solid #DEE5EB'}}/>
    <div style={{display: 'flex', flexDirection: 'row', height:'35px', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px'}}>
        <p style={{color: '#1F1F1F', fontSize: '13px', fontWeight: '400', lineHeight: '19.6', margin: 0}}>© 2022 Whirl. All Rights Reserved. Illustrations by <span style={{color:'#0070A0'}}>Streamline.</span></p>
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <img src="src/assets/Frame.svg" alt="" />
            <img src="src/assets/Frame (1).svg" alt="" />
            <img src="src/assets/Frame (2).svg" alt="" />
        </div>
    </div>
   </footer>
 );
}


export default Footer;