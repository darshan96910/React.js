import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Homecrud= () => {
  return (
     <section id={style.nav}>
        <Link to="/">create-users</Link>
        <Link to="User">Users</Link>
     </section>
    
  )
}

export default Homecrud
