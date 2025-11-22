import { Link } from "react-router-dom";
import React from "react";
function HeaderComp()
{
   return <div className="flex flex-row justify-between text-center p-3 border-b-2 border-gray-500">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900">
                Product Review
            </h1>
            <div className="bg-blue-400 w-40 rounded-lg text-center text-white place-content-center  hover:bg-blue-700">
                <Link to="/">Home</Link>
            </div>
        </div>
}
export default HeaderComp