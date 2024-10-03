import { collection, getDocs } from "firebase/firestore"
import { useState } from "react"
import { db } from "../init-firebase"
import { Link } from "react-router-dom";

//const bcrypt = require('bcrypt')

function Login(){

    const [user, setUser] = useState({
        email : "",
        password : "",
    })

    const {email, password} = user;

    const [docs, handup] = useState([])
    const [msg, SetMSG] = useState(<div></div>);

    const handleChange = (event) => {
        const {name, value} = event.target
        setUser((preValue)=>{
            return {
                ...preValue,
                [name] : value
            }
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const userRef = collection(db, "User-data");

        await getDocs(userRef).then(response => {
            const userdata = response.docs.map((doc) => ({
                data: doc.data(),
                id : doc.id,
            }))
            handup(userdata)
            });
            checkUserCredentials();
        }


        function checkUserCredentials(){
            docs.forEach(up=>{
                if(email === up.data.user["emailId"] && password === up.data.user["password"]) //bcrypt.compare(password, up.data.user["password"])
                {                                                                               // I commented the hashing part as it was showing an error in the npm files
                                                                                                // This is the code for comparing the normal text with the hashed text    
                    SetMSG(<h2>Welcome, {up.data.user["firstName"]}</h2>)
                    return;
                }
                else{
                    alert("Credentials do not match");
                }
            })
        }

    return(
        <div className="Login">

            <Link to='/signup'>
            <button className="sign-up">Sign up</button>
            </Link>
            <div className="login-details">

                <form onSubmit={handleSubmit}>
                <label htmlFor="email">Your email</label>
                <input id="email" name="email" type="email" value={email} onChange={handleChange} placeholder="Enter Your Email ID" required></input>

                <label htmlFor="email">Your Password</label>
                <input id="password" name="password" type="password" value={password} onChange={handleChange} placeholder="Enter Your Password" required></input>

                <br />
                <button className="login-button" type="submit">Login</button>
                </form>

            </div>
            <div className="display-msg">
            {msg}
            </div>


        </div>


    )
}

export default Login