import React from 'react'
import About from './About'
import image from '..//assets/image.jpg'


const Home = ({items,users}) => {
  return (
    <div>
      <About items={items} users={users}/>
        {/* <ol>
            {items.map((fruit) =>( <li>{fruit}</li>))}
        </ol>
        <h1>{users.username} </h1>
        <h1>{users.password}</h1> */}
        <img src={image} alt="Home" style={{width: '100%', height: 'auto'}} />
    </div>
  )
}

export default Home