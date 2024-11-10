import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterComp() {
    const [RegMail, setRegMail] = useState('');
    const [RegUsername, setRegUsername] = useState('');
    const [RegPass, setRegPass] = useState('');
    const navigate = useNavigate();
    const Register = () => {
        console.log("mail:"+RegMail+"\nusername:"+RegUsername+"\npass:"+RegPass);
        fetch('http://10.38.56.172:433/register', {
            method: "POST",
            headers : { 'Content-Type': "application/json" },
            body: JSON.stringify({ email: RegMail, username: RegUsername, password: RegPass })
        }).then(resp =>{
         if(resp.status===201){
             alert("your account created")
             navigate('/');
         }else if(resp.status===406){
           alert('account already exist');
         }else{
            alert("there is a problem but we dont know what is it :D");
         }
             

        })
    }
    return (

        <div>
            -
            <input type="email" placeholder="mail" value={RegMail} onChange={e => setRegMail(e.target.value)}></input>
            <input type="text" placeholder="username" value={RegUsername} onChange={e => setRegUsername(e.target.value)}></input>
            <input type="password" placeholder="password" value={RegPass} onChange={e => setRegPass(e.target.value)}></input>
            <button onClick={Register}>REGİSTER</button>

            <Link to="/">Login</Link>
        </div>
    );
}

export default RegisterComp;