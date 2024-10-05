import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import {useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let Navigate=useNavigate()
    let {abc} =useParams()
    console.log(abc);
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/Users/${abc}`)
        .then((resp)=>{
            console.log(resp.data);
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
        .catch(()=>{
            console.log("something went wrong");
        })
    },[abc])

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
     axios.put(`http://localhost:3000/Users/${abc}`,payload)
     .then(()=>{
        console.log("data has been updated");
     })
     .catch(()=>{
        console.log("something went wrong");
     })
     Navigate("/User")
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
            <button onClick={formhandle}>update</button>
        </form>
    </div>
  )
}

export default Edituser