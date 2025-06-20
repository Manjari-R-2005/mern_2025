import React from 'react'
import Child from './components/Child'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Counter from './components/Counter'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Hooks from './pages/Hooks'
import State from '../hooks/State'
import Effect from '../hooks/Effect'
import Effect2 from '../hooks/Effect2'

const App = () => {
   var fruits = ['Apple','Banana','Orange','Mango','Grapes']
   var user = {username:"Manjari",password:"1234"}
  return (
    <div>
         {/* <h1>Hello World</h1> */}
      
      {/* <Child name= 'Manjari' phoneNum= '123-456-7890' Dept='IT' />
      <Child name= 'Munchhh' phoneNum= '098-765-4321' Dept='HR' />
      <Home items={fruits} users={user} />
      <About />
      <Contact />
      <Skills /> 
      <Login /> */}
      {/* <Counter /> */}
      <Navbar />
      <Routes>
        <Route path = '/home' element = {<Home items = {fruits} users = {user}/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/counter' element = {<Counter />} />
        <Route path = '/skills' element = {<Skills/>}/>
        <Route path = '/login' element = {<Login />}/>
        <Route path = '/hooks' element = {<Hooks />}/>
        <Route path = '/state' element = {<State />}/>
        <Route path = '/effect' element = {<Effect />}/>
        <Route path = '/effect2' element = {<Effect2 />}/>


      </Routes>
    </div>
  )
}

export default App
