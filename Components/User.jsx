import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const User = () => {
  let [Content,setContent]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/Users")
    .then((resp)=>{
      console.log(resp.data);
      setContent(resp.data);
    })
    .catch(()=>{
      console.log("something went wrong");
    })
  },[])
  let deletedata=(x)=>{
    axios.delete(`http://localhost:3000/Users/${x}`)
    window.location.assign("/User")
  }
  return (
    <div id={style.userPage}>
      {Content.map((x)=>{
        return(
          <div id={style.profile}>
            <table>
              <tr>
              <th colSpan={2}>User:{x.id}</th>
              </tr>
              <tr>
                <td>name</td>
                <td>:{x.name}</td>
              </tr>
              <tr>
                <td>salary</td>
                <td>:{x.salary}</td>
              </tr>
              <tr>
                <td>company</td>
                <td>:{x.company}</td>
              </tr>
              <tr>
                <td><Link to={`/edit/${x.id}`}>edit</Link></td>
                <td><button onClick={()=>{deletedata(x.id)}}>delete</button></td>
              </tr>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default User