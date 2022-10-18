import React, { useState } from 'react'; 
function Table() {
  const [person,setPerson]= useState({fname: '',lname:''});

const [count, setCount]=useState(0);
const addition5 =( )=>{
  for(let i=0; i< 5; i++){
    setCount(prevState => prevState + 1);
  }
}
  const [name, setName]=useState("");
  const fileSubmit = (event)=>{
    event.preventDefault();
    alert(`"Hi" ${name}`)
  }
  return (
    <div className='App'>
        <form onSubmit={fileSubmit}>
          <label>name</label>
          <input type="text"  value={name} onChange={(e) =>setName(e.target.value)}/>
          <input type="submit" />
        </form>
        <button onClick ={() => setCount(count +1)}>Click
</button>
 
<p>Value: {count}</p>
<button onClick={() => addition5()}>add</button>

<input type="text" onChange={(e) => setPerson({...person,fname: e.target.value})} placehloder="Name" />
      <input type="text" onChange={(e) => setPerson({...person,lname: e.target.value})} placehloder="age" />
      <p>fname:{person.fname}</p>
      <p>lname:{person.lname}</p>


  </div>
  );
}

export default Table;


