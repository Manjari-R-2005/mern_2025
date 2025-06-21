import {Component} from 'react';

// class Skills extends Component {
//     render(){
//         return (
//             <div>Skills</div>
//         )
//     }
// }
 const Skills = () => {
    const user = {name: 'Manjari', phn: '8124907442'}
    return(
        <div>
            <h1>{user.name}</h1>
            <h1>{user.phn}</h1>
        </div>
    )
 }

export default Skills