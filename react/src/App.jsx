/*import React from 'react'
import Child from './components/Child'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Counter from './components/Counter'

const App = () => {
   var fruits = ['Apple','Banana','Orange','Mango','Grapes']
   var user = {username:"Manjari",password:"1234"}
  return (
    <>
      <div>
         <h1>Hello World</h1>
      </div>
      <Child name= 'Manjari' phoneNum= '123-456-7890' Dept='IT' />
      <Child name= 'Munchhh' phoneNum= '098-765-4321' Dept='HR' />
      <Home items={fruits} users={user} />
      <About />
      <Contact />
      <Skills /> 
      
    </>
  )
}

export default App*/
import React from 'react';
import Counter from "./components/Counter";
import Login from './pages/Login';
const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Login />
    </div>
  )
}
export default App;