import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';



function Friend({match}) {

 useEffect(() => {
  fetchFriend();
  console.log(match);
 },[]);

 const [friend, setFriend] = useState({})

 const fetchFriend = async () => {
    const fetchFriend = await fetch(
   `https://my-json-server.typicode.com/angelrosmend/utn-friendlist/contacts/${
    match.params.id
   }`
  );
  const friend = await fetchFriend.json();
  setFriend(friend);
  console.log(friend);
 }


 return (
  <div>
   <img src={friend.avatar} alt="" />
   <h1>{friend.nombre}</h1>
   <h2>{friend.ciudad}</h2>
   <h3>{friend.curso}</h3>
  </div>
 )
}

export default Friend
