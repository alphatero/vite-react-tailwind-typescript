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
  error: any;
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

function TextField({ id, label, error }: Text) {
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
        className={clsx
          ("border  w-full p-3 rounded",
          error ? "border-primary" : "border-gray focus:border-purple" )}
        onChange={(event) => setValue(event.target.value)}/>
    </div>
  )
}



function App() {
  const [formstate, setFormState] = useState([
    { id: "first-name", error:false, label:"First Name", errorMsg: "First Name cannot be empty"  },
    { id: "last-name", error:false, label:"Last Name", errorMsg: "Last Name cannot be empty" },
    { id: "email", error:false, label:"Email", errorMsg: "Email cannot be empty" },
    { id: "password", error:false, label:"Password", errorMsg: "Password cannot be empty" },
  ])
  const [count, setCount] = useState(0)

  function onSubmit(event:any) {
    event.preventDefault();
    
    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());
    setFormState((formstate) => 
      formstate.map((state: any) => ({
        ...state,
        error: Boolean(data[state.id]),
      }))
    )
  }
  console.log(formstate)

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
            <form className="space-y-4" onSubmit={onSubmit}>
              {
                formstate.map(({id, label, errorMsg, error}) => (
                  <TextField 
                    key={id}
                    id={id} 
                    label={label}
                    error={errorMsg && error}/>
                ))
              }

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
