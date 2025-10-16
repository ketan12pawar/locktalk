import React, { useState } from 'react'
import "./App.css"

function App() {

  const[arrow, setArrow] = useState("encode");

  const[msg, setMsg] = useState('')

  const[result, setResult] = useState('')

  const algo = {
    a:"s2c",
    b:"a90",
    c:"sd",
    d:"er",
    e:"pi",
    f:"we",
    g:"gg",
    h:"1p",
    i:"1o",
    j:"qw",
    k:"mn",
    l:"ew",
    m:"io", 
    n:"as",
    o:"qq",
    p:"pp",
    q:"wt",
    r:"cv",
    s:"ss",
    t:"lio",
    u:"lp",
    v:"ap",
    w:"6t",
    x:"li",
    y:"df",
    z:"hu",
  }


   function encode(str) {
    str = str.toLowerCase()
    let result = ""
    for (let i=0; i < str.length; i++) {
      if(str[i].charCodeAt(0) >=97 && str[i].charCodeAt(0) <= 122) {
        result = result + algo[str[i]]
      }
      else{
        result = result + str[i]
      }
    }

    setResult(result)
   }


   function decode(str) {
    let msg = ""
    let arr = Object.entries(algo)
    let found = null;
    for (let i=0; i < str.length; i++) {
      for (let j=0; j < arr.length; j++) {
        found = false;
       // 3 mathing chars
       if(arr[j][1] == str.slice(i, i + 3)) {
        msg = msg + arr[j][0]
        i +=2
        found = true;
        break;
       }

       // 2 mathing chars
       else if (arr[j][1] == str.slice(i, i+2)) {
        msg = msg + arr[j][0]
        i +=1;
        found = true;
        break;
       }

       // 1 mathing chars
        else if (arr[j][1] == str.slice(i, i+1)) {
        msg = msg + arr[j][0]
        found = true;
        break;
       }
      }

    if(!found) {
      msg += str[i]
      }
   }

   setResult(msg)
   }

   const clickHandler = ()=> {
    if(msg.trim()!= '') {
      if(arrow=="encode") {
        encode(msg)
      }
      else {
        decode(msg)
      }
    }
      else {
        alert("Please write something")
      }
   }

  return (
    <>
         <div id="main">
           <h1>Send a protected message</h1>

            <div id='main1'>
              <select name="" id="" value={arrow} onChange={(event)=>{
                setArrow(event.target.value)
                setMsg('')
                setResult('')
              }}>
                <option value="encode">Encode</option>
                <option value="decode">Decode</option>
              </select>
            </div>

            <div id='main2'>
               <input
               type="text"
               value={msg}
               onChange={(event)=>{
                setMsg(event.target.value)
                setResult('')
               }}
               />

                <button onClick={clickHandler}>Continue</button>
              </div>

              <div>
                <textarea
                style={(result=='')?{display:"none"}:{display:"block"}}
                value={result} readOnly></textarea>
              </div>
         </div>
    </>
  )
}

export default App
