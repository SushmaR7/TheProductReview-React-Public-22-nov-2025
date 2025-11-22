import { Link } from "react-router-dom"
import React from "react";
function Home() {
    return ( 
        <>
    <div className="flex flex-col justify-center p-20">
            <Link className="bg-blue-400 w-full rounded-lg h-10 text-center text-3xl font-bold text-white  hover:bg-blue-700" to="/review/writereview">Write Review</Link><br/>           
            <Link className="bg-blue-400 w-full rounded-lg h-10 text-center text-3xl font-bold text-white  hover:bg-blue-700" to="/review/viewreview">View Reviews</Link>
    </div>

      </>)
  }
  
  export default Home
  