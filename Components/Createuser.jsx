import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Createuser = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let goto=useNavigate()

    let nameData=(e)=>{
     setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formhandle=(e)=>{
   e.preventDefault()
   let payload={name,salary,company}
   axios.post("http://localhost:3000/Users",payload)
   .then(()=>{
    console.log("got the data");
   })
   .catch(()=>{
    console.log("something went wrong");
   })
   goto("/User")
    }
  return (
    <div id={style.myform}>
        <form action="">
            <label>name</label>
            <input type="text" value={name} onChange={nameData}/>
            <label>salary</label>
            <input type="text"  value={salary} onChange={salaryData}/>
            <label>company</label>
            <input type="text" value={company} onChange={companyData}/>
            <button onClick={formhandle}>Submit</button>
        </form>
    </div>
  )
}

export default Createuser