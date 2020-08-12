import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './amigos.css'
import Boton from './Boton';


function Amigos() {

 const [friends, setFriends] = useState([]);

 const fetchFriends = async () => {
  const data = await fetch('https://my-json-server.typicode.com/angelrosmend/utn-friendlist/contacts');
  
  
  const friends = await data.json();
  console.log(friends);
  setFriends(friends);
 }
 
 
 useEffect(() => {
  fetchFriends();
 },[]);


 return (
  <div className="container">
   {friends.map(friend =>(
     <li key={friend.id} className="amigo">
     <img className="avatar" src={friend.avatar} alt="" />
     <Link className="link" to={`/home/amigo/${friend.id}`}>
     <h3>{friend.nombre}</h3>
     </Link>
     <h4>{friend.ciudad}</h4>
     <Boton/>

     </li>
   ))}
  </div>
 )
}

export default Amigos
