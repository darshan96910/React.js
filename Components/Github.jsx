import axios from 'axios';
import { useEffect, useState } from 'react'

const Github = () => {
    let [Content,setContent]=useState([]);
    let [id,setId]=useState("");
    let [btn,setbtn]=useState("");

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${id}`)
        .then((resp)=>{
            console.log("got the data");
            console.log(resp.data);
            setContent(resp.data);
        })
        .catch(()=>{
            console.log("something went wrong");
        })
    },[id])
    let iddata=(e)=>{
        setId(e.target.value)
    }
    let formhandle=(e)=>{
    //   e.preventDefault();
      setbtn(id);
    }

  return (
    <div>
        {Content.map((x)=>{
        return(
       <div>
        <h1>{x.id}</h1>
        <h1>{x.login}</h1>
        <img src={x.avatar_url} alt="hi" />
       </div>
        )})}
        <input type="text" value={id} onChange={iddata} />
        <button onClick={formhandle}>submit</button>
        <h1>id:{Content.id}</h1>
        <h1>login:{Content.login}</h1>
        <img src={Content.avatar_url} alt="hi" />
    </div>
  )
}

export default Github