import logo from './logo.svg';
// import './App.css';
import {useEffect, useState} from 'react'
import Content from './Content';



// const courses = [
//   {
//     id: 1,
//     name: 'HTML/CSS'
//   },
//   {
//     id: 2,
//     name: "JavaScript"
//   },
//   {
//     id: 3,
//     name: "ReactJS"
//   }
// ]

// function App() {
//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')
//   const [checked,setChecked] = useState([])
//   const handelCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if(isChecked) {
//         //uncheck
//         return checked.filter(item => item!==id)
        
//       }else{ //check
//         return [...prev,id]
//       }

//     } 
//     )
//   }

//   const handelSubmit = () => {
//     //Call API  
//     console.log({
//       name, 
//       email,
//       id: checked
//     });
//   } 
//   return (
//     <div style={{padding:32}}>


//       <input 
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <br></br>
//       <input 
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type="checkbox" 
//             checked ={checked.includes(course.id)}
//             onChange={() => handelCheck(course.id)}>
//           </input> 
//           {course.name}
//         </div>
//       ))}

//       <button onClick={handelSubmit}>Change</button> 
//     </div>
//   )
// }



function App()
{

  // const [job,setJob] = useState('')
  // const [jobs,setJobs] = useState( () => {
  //   //json là chuỗi nên cần .parse để chuyển thành mảng mới đưa đc vào useSta
  //   const storageJob = JSON.parse(localStorage.getItem('jobs'))
  //   console.log(storageJob);

  //   //Nếu chưa có trong storage thì lấy mảng trống
  //   return storageJob ?? []
  // })
  // const handelSubmit = () => {
  //   setJobs(prev => {
  //     const newJob =  [...prev, job]
  //     //Lưu vào local storage
  //     const jsonJob = JSON.stringify(newJob)
  //     localStorage.setItem('jobs',jsonJob)
  //     return newJob
  //   })
  //   setJob('')

  // }
  // return (
  //   <div style={{padding: 32}}>
  //     <input value={job} 
  //       onChange = {e =>setJob(e.target.value)}
  //     />
  //     <button onClick={handelSubmit}>Add</button>
  //     <ul>
  //       {jobs.map( (job,index)=> (
  //         <li key={index}> {job}</li>
  //       ))}
  //     </ul>

  //   </div>
  // )
  // const[show,setShow] = useState(false)

  return (
    <div>

      <Content />
    </div>
  )
}

export default App;
