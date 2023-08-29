import React, {useState} from 'react'

const App = () => {
  const [usename, setusename] = useState("")
  const [userClass, setuserClass] = useState("")
  const [emai, setemai] = useState("")
  const [paid, setpaid] = useState(false)
  const [allUser, setallUser] = useState([])
  const [dispForm, setdispForm] = useState(false)
  const [oneStud, setoneStud] = useState({});
  const [editName, seteditName] = useState("")
  const [editEmail, seteditEmail] = useState("")
  const [editClass, seteditClass] = useState("")
  const [editPaid, seteditPaid] = useState("");
  const [setIndex, setsetIndex] = useState("")
  const [allInfo, setallInfo] = useState([
    {
      data1: "iouytresdfghjklj",
      data2: "uytrdfscjhkv"
    },
    {
      data1: "iouytresdfghjklj",
      data2: "uytrdfscjhkv"
    },
    {
      data1: "iouytresdfghjklj",
      data2: "uytrdfscjhkv"
    },
    {
      data1: "iouytresdfghjklj",
      data2: "uytrdfscjhkv"
    },
  ])
  const setStudPayment = (e)=>{
    e.target.checked? setpaid(true) : setpaid(false)
  }
  const addStud = ()=>{
    let data = {
      name: usename,
      class: userClass,
      email: emai,
      paid: paid
    }
    // console.log(data);
    setallUser([...allUser, data])
    console.log(allUser);
  }
  const paiid = ()=>{
    const studPaid = allUser.filter((user)=> user.paid)
    setallUser(studPaid)
  }
  const delStud = (i)=>{
    alert(i)
    allUser.splice(i, 1)
    setallUser([...allUser])
  }
  const showForm = (i)=>{
    setdispForm(true)
    setsetIndex(i)
  }
  const editStud = ()=>{
    let data ={
      name: editName,
      class: editClass,
      email: editEmail,
      paid: editPaid
    }
    allUser.splice(setIndex, 1, data)
    setallUser([...allUser])
    setdispForm(false)
  }
  return (
    <div>
      <input onChange={(event)=>setusename(event.target.value)} type="text" /><br /> <br />
      <input onChange={(event)=>setuserClass(event.target.value)} type="text" /><br /> <br />
      <input onChange={(event)=>setemai(event.target.value)} type="text" /><br /> <br />
      <input onChange={(event)=>setStudPayment(event)} type="checkbox" name="" id="" />
       <span>Paid</span><br /> <br />
      <button onClick={addStud}>Add Student</button>
      <button onClick={paiid}>Paid Student</button>


      {dispForm &&
        <div>
          <input onChange={(event)=>seteditName(event.target.value)} type="text" /><br /> <br />
          <input onChange={(event)=>seteditClass(event.target.value)} type="text" /><br /> <br />
          <input onChange={(event)=>seteditEmail(event.target.value)} type="text" /><br /> <br />
          <input onChange={(event)=>seteditPaid(event)} type="checkbox" name="" id="" />
          <button onClick={editStud}>Edit Student</button>
        </div>
      }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Paid</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUser &&
            allUser.map((el, i)=>(
              <tr key={i}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.class}</td>
                <td>{el.paid? "Paid": "Not Paid"}</td>
                <td>
                  <button onClick={()=>showForm(`${i}`)}>E</button>
                  <button onClick={()=>delStud(`${i}`)}>D</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

    
  )
}

export default App