import React, { useState, useEffect }from 'react';

const[myBots, setMyBots] = useState([])
// const[]
export default function Fetch(){
 useEffect(() => {
    fetchData();
 }, [] );

 const fetchData = () => {
    fetch(' http://localhost:4000/bots')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
 }
}
