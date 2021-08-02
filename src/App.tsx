import React, { useState } from 'react'
import './App.css'
import './css/app.css'


function clsx(...str: string[] ) {
  return str.filter(Boolean).join(" ");
}

type Props = {
  children: any;
  className: string;
}

type Text = {
  id: string;
  label: string;
}

function Card({ children, className }: Props) {
  return (
    <div 
      className={clsx("rounded-lg w-full shadow-sp p-4", className)}    
    >
      { children }
    </div>
  ); 
}

function Button({ children, className }: Props) {
  return (
    <button 
      className={clsx(
        "rounded-lg w-full shadow-sp p-4 bg-green", className)}    
    >
      { children }
    </button>
  );
}

function TextField({ id, label }: Text) {
  const [value, setValue] = useState('');
  return (
    <div className="relative flex items-center">

      {
        value === '' && (
          <label 
            htmlFor={id} 
            className={clsx("absolute px-3", value !== "" ? "opacity-0":"")}>
            { label }
          </label>
        )}

      <input
        type="text" 
        name={id} 
        id={id} 
        className="border border-gray focus:border-purple
        w-full p-3 rounded"
        onChange={(event) => setValue(event.target.value)}/>
    </div>
  )
}

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
        <section className="grid gap-6">
          <Card className="bg-purple">
            <p className="px-4"><b>Try it free 7 days </b> 
            then $20/mo. thereafter</p>
          </Card>
          <Card className="bg-white text-black">
            <form className="space-y-4">
              <TextField id="first-name" label="First Name"/>
              <TextField id="last-name" label="Last Name"/>
              <TextField id="email" label="Email"/>
              <TextField id="password" label="Password"/>
              <Button className="text-white shadow-green">CLAIM YOUR FREE TRIAL</Button>
              <div>
                <p className="text-gray text-xs px-4">
                By clicking the button, you are agreeing to our{" "}
                <a href="#" className="text-primary font-bold">
                  Terms and Services
                </a>
                </p>
              </div>
            </form>
          </Card>
          
        </section>
      </div>
    </div>
  )
}

export default App
