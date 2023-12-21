'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {

  interface User {
    name: string,
    pass: string
  }

  const router = useRouter()
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')
  const submit = (e: any) => {
    e.preventDefault();
    // example POST method
    fetch(`api/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: uname,
        password: pass
      })
    })
    router.push('/')
  }

  return (
    <main className="bg-slate-950 h-screen w-screen flex justify-center items-center">
      <div className="w-[300px] h-[400px] bg-white rounded-lg shadow-md p-3">
        <h1 className="text-slate-900 text-[2rem] text-center mb-6">login</h1>
        <form onSubmit={submit}>
          <div className="w-[100%] mb-2">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username" value={uname} onChange={(e) => setUname(e.target.value)} className="rounded-lg w-[100%] outline-slate-950 border-2 border-slate-950 p-2 placeholder-slate-800" />
          </div>
          <div className="w-[100%] mb-[2rem]">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={pass} onChange={(e) => setPass(e.target.value)} className="rounded-lg w-[100%] outline-slate-950 border-2 border-slate-950 p-2 placeholder-slate-800" />
          </div>
          <button className="w-[100%] p-3 border-2 border-slate-950 rounded-lg" type="submit">Log In</button>
        </form>
      </div>
    </main>
  )
}
