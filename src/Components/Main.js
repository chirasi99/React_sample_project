// create javascript variables
// const name = "Chirasi Amaya";
// const age = 20;

import { Fragment } from "react";

// create javascript object
// const myobj = {
//         name:`${name}` ,
//         age: `${age}`,
//         city: "Kandy"
// };

// create a function
// function Main(props){
//         //passing default properties
//         const {city} = myobj;
//         // passing through the object properties
//         return(
//                 <div>
//                         This is main component
//                       <ul>
//                         <li>{myobj.name}</li>
//                         {/* accessing javascript object attributes */}
//                         <li>{age}</li>  
//                         {/* accessing  java script variables */}
//                         <li>{city}</li>
//                         {/* accessing  java script object directly passing through the object properties */}
//                         <li>javaScript</li>
//                         </ul> 
//                         {props.children} 
//                         {/* accessing properties passing from the parent (app.js file included items) */}
//                 </div>
//         );
// }


// create a function
function Main({children,name,city,age,image}){
        // const {city} = myobj;
        // passing through the object properties
        return(
                // <div>
                //         This is main component
                //       <ul>
                //         <li>{name}</li>
                //         {/* accessing javascript object attributes */}
                //         <li>{age}</li>  
                //         {/* accessing  java script variables */}
                //         <li>{city}</li>
                //         {/* accessing  java script object directly passing through the object properties */}
                //         <li>javaScript</li>
                //         </ul> 
                //         {children} 
                //         {/* accessing properties passing from the parent (app.js file included items) */}
                // </div>

                <Fragment>
                
                <img src={image?`${image}` : "https://th.bing.com/th/id/OIP.47j7BcBl2PUKistycJcZ6gHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" } alt="random" />
                
                <div>
                <h3>{!name? 'no name' : `${name}` }</h3>
                <p><span>{city}</span><br/>
                <span>{age}</span></p>
                </div>
                </Fragment>
        );
}



// export the component
export default Main;