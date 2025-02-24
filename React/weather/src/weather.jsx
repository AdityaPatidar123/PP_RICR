import React, { use, useActionState, useState } from 'react'

const Weather = () => {
     const[place,setPlace]=useState("");
     const[location,setLocation]=useState({
      lat :"",
      lon :"",
     });

      const API_KEY= "031f4daf87d9dfa615b8fda4451ef2d0";
    
    

     const get_LOC = async(city) => {
       const URL=`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid=${API_KEY}`;

       const res= await fetch(URL);
       const data= await res.json();
       console.log(data);
       setLocation({
        lat:data[0].lat,
        lon:data[0].lon,   
    })
      
       console.log(location);
    }

  
    
    const get_Weather =async () =>{
     let city=place;
      get_LOC(city);
      console.log(location);

    const Weather_URL=`https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&exclude={part}&appid=${API_KEY}`
      
     const res=await fetch(Weather_URL);
     const data=await res.json();
    console.log(res);
    
     console.log(data);
     



    }
    


  return (
    <>
    <div className="container">
      <input type="text" name="city" id="city" placeholder='City Name' className='p-2 border' value={place} onChange={(e)=>setPlace(e.target.value)} />
      <button className='bg-blue-500 p-2 m-3 rounded' onClick={get_Weather}>Get Weather</button>
    </div>
    </>
  )
}

export default Weather