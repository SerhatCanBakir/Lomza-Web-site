import React ,{useState} from "react";

function UserProfileComp(){
    const [Status,setStatus] = useState('HELLO WORLD !');
     
    const HandleStatusChange = (e)=>{
        setStatus(e.target.value);
    }

    return(
        <div>
            <h3>User Profile</h3>
            <h4>Status {Status}</h4>
            <input type="text" placeholder={Status} onChange={HandleStatusChange} value={Status}></input>
        </div>
    );
}

export default UserProfileComp;

