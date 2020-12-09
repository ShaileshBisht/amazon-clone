import { Link , useHistory } from 'react-router-dom';
import React,{useState} from 'react';
import "./Login.css";
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        // firebase login auth
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/");
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //firebase register auth
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //successfully created to new user
            console.log(auth);
            if(auth){
                history.push("/")
            }
        })
        .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to="/" >
                <img  className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt=""></img>
            </Link>
            
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input onChange={e => setEmail(e.target.value)} type="text" value={email}/>

                    <h5>Password</h5>
                    <input onChange={e => setPassword(e.target.value)} type="password" value={password}/>

                    <button onClick={signIn} type="submit"
                        className="login_signInButton">Sign In
                    </button>

                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. 
                    Please see our Privacy Notice, 
                    our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login_registerButton" onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login;
