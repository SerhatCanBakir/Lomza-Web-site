import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterComp() {
    const [RegMail, setRegMail] = useState('');
    const [RegUsername, setRegUsername] = useState('');
    const [RegPass, setRegPass] = useState('');
    const HandleRegister = (e) => {
        //
    }
    return (

        <div>
            <form>
                <input type="email" placeholder="mail" value={RegMail} onChange={e => setRegMail(e.target.value)}></input>
                <input type="text" placeholder="username" value={RegUsername} onChange={e => setRegUsername(e.target.value)}></input>
                <input type="password" placeholder="password"value={RegPass} onChange={e => setRegPass(e.target.value)}></input>
                <button type="submit">REGİSTER</button>
            </form>
            <Link to="/">Login</Link> 
        </div>
    );
}

export default RegisterComp;