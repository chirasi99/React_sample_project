// import { Fragment, useState } from 'react';
// import './App.css';
// import Main from './Components/Main';
import { useState } from "react";
import Unit from './Components/Unit';

// // import myData from './Data/myData';

// import {myData} from './Data/myData';
// import {myData2} from './Data/myData';

// // let myVar = 'chirasi';


// //create a new component
// const NewBlock = ()=>{
//   return(
// <Fragment>
// {myData2?.map(({name,city,age,id})=>{
//   return <Main key={id} name={name} city={city} age={age} />
// } )}
// </Fragment>
// )
// }

// //create a new component
// // const NewBlock = ()=>{
// //   return(
// // <> OR <div> same as the app funtion
// // {myData2?.map(({name,city,age,id})=>{
// //   return <Main key={id} name={name} city={city} age={age} />
// // } )}
// // </> OR </div>  same as the app funtion
// // )
// // }


// // const myData = [
// //   {
// //     id:1,
// //     name: "Sadun Perera",
// //     age: 50,
// //     city: "Gampha"
// //   },
  
// //   {
// //     id:2,
// //     name: "Gayani Amarathunga",
// //     age: 27,
// //     city: "Negambo"
// //   },
  
// //   {
// //     id:3,
// //     name: "Kaveeshani Dias",
// //     age: 45,
// //     city: "Kegalle"
// //   },
  
// //   {
// //     id:4,
// //     name: "Sawani Galappaththi",
// //     age: 30,
// //     city: "Colombo 05"
// //   },
  
// //   {
// //     id:5,
// //     name: "Pavani Kavindi",
// //     age: 40,
// //     city: "Colombo 10"
// //   },

// // ];

// function App() {

// // const [myVar,setMyVar]=useState('chirasiiii');
// // const [myDataState, setMyDataState] = useState(myData);
// const [inputVal , setInputVal] = useState(0);

// const clickHandle = ()=>{
//   setTimeout(()=>{
//     console.log("clicked....");
//     // setInputVal(inputVal + 1 );    incorrect method 
//     // setInputVal((pre)=>pre+1);
//     setInputVal((pre)=>{
//       if(pre<1){
//         return pre+1
//       }
//       else if(pre<2){
//         return pre+3
//       }
//       else{
//         return pre+2
//       }
//     });
//   },3000)


//   // setMyVar('amaya');
//   // myVar = 'amaya';
//   // console.log(myVar);
//   // setMyVar(
//   //   {
//   //     ...myVar,
//   //     name: 'amaya',
//   //   });
//   // };

//     // setMyDataState ([...myDataState,
//     //   {
//     //     id:10,
//     //     name: "Duneesha De Silva",
//     //     age: 40,
//     //     city: "Bandarawela",
//     //     image: "https://th.bing.com/th/id/OIP.AmJ_wAV5xzXoCyVqiuwF3gAAAA?pid=ImgDet&rs=1"
//     //   }
//     // ])
//   };

// console.log()

// const MainBlock =  myData.map(({name,city,age,id,image},index)=>{
//   return <Main key={id + index} name={name} city={city} age={age} image={image}/>
// }
// )

// // const inputChangeHandle = (event,data)=>{
// //   event.preventDefault();
// //   console.log(data);
// //   setInputVal(event.target.value);
// // }
// return (
//    <Fragment>
//       <h1>hello world</h1>
//       {/* <h4>My name is {myVar}</h4> */}
//       {/* <h4>My name is {myVar.name}</h4> */}
//       {/* <h6>{inputVal}</h6> */}
//       {/* <Main/> */}
//       <Main name ="Kasun" city="Galle" age="23" />
//       <Main>
//         <h2>This is sample react project</h2>
//         <p>React is a JavaScript library for building user interfaces.
//           Learn what React is all about on our homepage or in the tutorial.</p>
//       </Main>
//       <Main name ="Supun" city="Matara" age="28" />


// {/* {
//   myData.map(ele=>{
//     return <Main name={ele.name} city={ele.city} age={ele.age} />
//   }
//   )
// } */}


// {/* identify the unique key for each item in the list */}
// {/* {
//   myData?.map(({name,city,age},index)=>{
//     return <Main key={index} name={name} city={city} age={age} />
//   }
//   // ?- check the data is available or not
//   )
// } */}

// {/* {
//   myData.map(({name,city,age,id})=>{
//     return <Main key={id} name={name} city={city} age={age} />
//   }
//   )
// } */}

// {/* {
//   myData2.map(({name,city,age,id})=>{
//     return <Main key={id} name={name} city={city} age={age} />
//   }
//   )
// } */}

// {MainBlock}

// {/* accessing new compnonet */}
// <NewBlock/>

// <br /><br />
// {/* inline css write as a passing object in js */}
// <button 
// style={
// {
//   backgroundColor: "blue",
//   color: "white",
//   padding: "15px",
//   borderRadius: "10px",
//   border: "none",
//   cursor: "pointer",
//   fontSize: "18px"
// }
// }

// onClick={clickHandle}  >Click Me</button>
// {/* if we use  onClick = {clickHandle()}  then it works as default function rather than listenning onclick event. */}

// <br />
// <br />

// {/* <input style = {
// {
//   padding:"5px",
//   fontSize: "14px",
// }  
// }

// type='text'
// placeholder='Type You Want ....'

// onChange={(e)=>{
//   // that inputChangeHandle function with in anonumous function .there fore it can write as a inputChangeHandle()
//   inputChangeHandle(e,e.target.value);
//   // e.preventDefault();
//   // setInputVal(e.target.value);
//   }
// }
// /> */}




// </Fragment>
//   );
// }

// export default App;

const App =()=>{
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [myData, setMyData] = useState([]);

  console.log(myData);

   return <div className="main_container">
    <div className="main_left">

        <label>Image Url</label>
        <input type="text" value={imageUrl} onChange={(e)=>{
        e.preventDefault();
        setImageUrl(e.target.value);
        }} />
        <br />
        <label>Name</label>
        <input type="text" value={name}    onChange={(e)=>{
        e.preventDefault();
        setName(e.target.value);
        }} />
        <br />

        <label>City</label>
        <input type="text" value={city}    onChange={(e)=>{
        e.preventDefault();
        setCity(e.target.value);
        }} />
        <br />

        <label>Age</label>
        <input type="text" value={age}     onChange={(e)=>{
        e.preventDefault();
        setAge(e.target.value);
        }} />
        
        <br />
        <br />

        <button type="submit" onClick={() =>
        {
            // console.log({
            // imageUrl,
            // name,
            // city,
            // age,
          // })

          setMyData(pre=>{
            return [...pre,{
              image: imageUrl,
              name,
              city,
              age,
            }]
          })
        
          setImageUrl((pre)=>{
            if(pre.length>0){
              return ''
            }
            else{
              return pre
            }
          });

          setName((pre)=>( pre.length>0? '' : pre ));
          setCity((pre)=>( pre.length>0? '' : pre ));
          setAge((pre)=>( pre.length>0? '' : pre ));

        }
        }>Submit</button>
    </div>
    <div className="main_right" >
        {myData?.map(({image,name,city,age},index)=>(
        
        <Unit image={image} name={name} city={city} age={age} key={index}/>
        
        ))}
    </div>
   </div>
}

export default App;