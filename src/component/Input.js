"use client"
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default function Input() {
    let [email , setEmail] = useState("")
    let [password , setPassword] = useState("")
    const Add = async () =>{
        let User = {email:email , password:password}
        await axios.post("https://nice-blue-calf-gown.cyclic.app/user",User)
    }

   
  return (
    <div style={{display:"flex", 
    flexDirection:"column",justifyContent:"center", height:"100vh"}}>
        <h3 align="center">Data Add MongoDb</h3>
        <div style={{display:"flex", 
        flexDirection:"column",alignItems:"center", justifyContent:"center"}}>

        <div class="form-floating mb-3" style={{width:"400px"}}>
  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating" style={{width:"400px"}}>
  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
        </div>
<div className="btn" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <button onClick={Add} className='btn btn-success' style={{width:"400px"}}> User Add</button>
</div>
    </div>
  )
}
