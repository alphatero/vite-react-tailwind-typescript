import React, { useState } from 'react'
import './App.css'
import './css/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container-xl p-6 md:w-full">
      <div className="flex md:flex-row flex-col 
      items-center h-screen justify-center 
      text-white my-10 md:my-0">
        <div className="md:flex-1 w-full md:pb-0 pb-10">
          <h1 className="text-3xl font-bold "
          >Learn to code by<br /> watching others</h1>
          <p className="text-center my-4">See how experienced developers solve problems in real-time. 
            Watching scripted tutorials is great, 
            but understanding how developers think is invaluable. </p>
        </div>
        <div className="md:flex-1 max-w-screen-sm md:px-11 px-0 flex
        flex-col">
          <button 
          className="btn  
          text-white text-base bg-purple rounded-lg
          shadow-sp py-5 px-5 my-6
          w-full 
          "
          ><span className="font-bold">Try it free 7 days </span> 
          then $20/mo. thereafter</button>

          <form action="" 
          className="rounded-lg bg-white
          shadow-sp w-full p-6">
            <input type="text" 
            id="firstName" placeholder="First Name"
            className="border-gray border-solid border text-black 
            py-3 focus:border-purple px-8 mb-5 w-full"/>
            <input type="text" 
            id="lastName" placeholder="Last Name"
            className="border-gray border-solid border text-black 
            py-3 focus:border-purple px-8 mb-5 w-full"/>
            <input type="mail" 
            id="eMail" placeholder="Email Address"
            className="border-gray border-solid border text-black 
            py-3 focus:border-purple px-8 mb-5 w-full"/>
            <input type="password" 
            id="password" placeholder="Password"
            className="border-gray border-solid border text-black 
            py-3 focus:border-purple px-8 mb-5 w-full"/>

            <button className="btn bg-green rounded-lg
          shadow-green w-full
          text-lg py-4 mb-2">CLAIM YOUR FREE TRIAL</button>
          <p className="text-gray text-xs">By clicking the button, you are agreeing to our 
          <span className="text-primary"> Terms and Services</span></p>
          </form>
        </div>
      </div>

      {/* <header className="App-header">
        <p>Learn to code by watching others</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */}
    </div>
  )
}

export default App
