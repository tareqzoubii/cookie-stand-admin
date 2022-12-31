import React from "react";
import { useState } from "react";

export default function Form(){
     
     const [userInput, setUserInput] = useState({
          location: "",
          max: 0,
          min: 0,
          avg: 0,
     })
     
     const [fullReplyState,setFullReplyState] = useState([])


     const handleChange = (e) => {
          const name = e.target.name;
          const value = e.target.value;
          setUserInput((prev) => {
               return { ...prev, [name]: value}
          })
}    
     console.log(userInput)

     const submitHandler = (e) => {
          e.preventDefault();
          setFullReplyState([...fullReplyState,userInput])
     }

     return (
       <>
         <section>
           <form className="m-6" onSubmit={submitHandler}>
             <label> Cookies Stand </label>
             <br></br>
             <label> Location </label>
             <input onChange={handleChange} placeholder="location"  name="location"/>
             <br></br>
             <label>Maximum per hour</label>
             <input  onChange={handleChange} placeholder="maximum" name="max"/>
             <label>Minimum per hour</label>
             <input  onChange={handleChange} placeholder="minimum" name="min"/>
             <label>Average per sale</label>
             <input  onChange={handleChange} placeholder="average" name="avg"/>
             <br></br>
             <button className="bg-green-900">Create</button>
           </form>
         </section>
         <section className="w-full pt-10 text-center shadow-lg shadow-black-50">
                    {fullReplyState.length > 0 && fullReplyState.map((item,index)=>{
                         return(
                              <div>
                                   <p>
                                   {JSON.stringify(item)}
                                   </p>
                              </div>
                         )
                    })}
               </section>
       </>
     );
}