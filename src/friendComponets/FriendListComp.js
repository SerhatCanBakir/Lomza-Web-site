import { useState } from "react";

function FriendListComp(){
        const [Friends,setFriends] = useState([{id:null,username:null,status:null}]);

       return(
        <div>
            <ul>
                {Friends.map(elemet=>{
                    <li key={elemet.id}>{elemet.username}-{elemet.status} </li>
                })}
            </ul>
        </div>
       );
                
}
export default FriendListComp;