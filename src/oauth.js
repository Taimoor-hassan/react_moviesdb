import React from 'react';
import GoogleLogin from 'react-google-login';

function Oauth() {

    const responseGoogle = (response) => {
        // console.log(response.profileObj);
        // console.log(response.profileObj.givenName);
        console.log(response.profileObj.imageUrl)
        
    }

    // if (response.profileObj.googleId=0) {
    
    // } 

    return (
        <>
        <GoogleLogin
            clientId="718894404777-hpkf1hgjecalkvgeco1hlmmce09d74o9.apps.googleusercontent.com"
            buttonText="Login"
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>login</button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            // stay logged in
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
        />
        <img src="" alt="" srcset=""/>
        </>
    )
   
}

export default Oauth
// export {Data}