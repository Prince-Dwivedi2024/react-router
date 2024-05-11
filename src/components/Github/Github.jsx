import React, {useEffect, useState} from 'react'

function Github() {
    const [data, setData]= useState(0)
     useEffect(() => {
    fetch ('https://api.github.com/users/Prince-Dwivedi2024')
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        setData(data)
    })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers} 
    <img src="{data.avtar_url}" alt="Git-pic" width={300} /></div>
  )
}

export default Github