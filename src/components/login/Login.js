import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { UserContext } from '../../App';
import google from "../../google.png";
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';


if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


const Login = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = ()=>{
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          
          const user = result.user;
          setLoggedUser(user)
          handleToken()
          
        
        }).catch((error) => {
          
        });
    }
    const handleToken = ()=>{
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        console.log(idToken)

       sessionStorage.setItem('token', idToken)
        history.replace(from);
      }).catch(function(error) {
        // Handle error
      });
      
    }
    
    return (
        <div className='login'>
            <div className='btn-div'>
            <h4>Login with Google</h4>
            <button onClick={handleGoogle} className="google-btn">
            <img className='google-logo' src={google} alt="" srcset=""/>
            <div className='h3'><h3 > Google signIn</h3></div>
           
            </button>
            </div>
        </div>
    );
};

export default Login;