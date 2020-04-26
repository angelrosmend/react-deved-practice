import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function Friends() {

 useEffect(() => {
  fetchFriends();
 },[]);

 const [friends, setFriends] = useState([]);

 const fetchFriends = async () => {
  const data = await fetch('https://my-json-server.typicode.com/angelrosmend/utn-friendlist/contacts');
  
  
  const friends = await data.json();
  console.log(friends);
  setFriends(friends);
 }

 return (
  <div>
   {friends.map(friend =>(
    <h1 key={friend.id}>
     <Link to={`/friends/${friend.id}`}>
     {friend.nombre}
     </Link>
     </h1>
   ))}
  </div>
 )
}

export default Friends
