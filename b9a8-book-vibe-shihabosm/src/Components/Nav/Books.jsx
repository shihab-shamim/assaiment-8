
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import {Outlet} from 'react-router-dom'
const Books = () => {
    const [tabIndex,setTabIndex]=useState(0)
    return (
        <div className="max-w-7xl mx-auto mt-12">
            <div className=" bg-[#1313130C] py-6 rounded-xl">
            <h1 className="text-center font-bold text-=[28px] work-sans">Books</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
            <div className="dropdown  ">
  <div tabIndex={0} role="button" className="btn m-1 ">Sort By <RiArrowDropDownLine /> </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Rating</a></li>
    <li><a>Number of page</a></li>
    <li><a>Publish Year</a></li>
  </ul>
</div>
            </div>
            <div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800">
	<Link to={``}  onClick={()=>setTabIndex(0)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?'border border-b-0 ':'border-b'}rounded-t-lg dark:border-gray-600 dark:text-gray-600`}>
		
		<span className="work-sans text-xl">Read Books</span>
	</Link>
	<Link to='wishlist' onClick={()=>setTabIndex(1)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?'border border-b-0 ':'border-b'}rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		
		<span className="work-sans text-xl">Wish List</span>
	</Link>
    <hr className="dark:bg-gray-100" />
    
</div>
        </div>
        <Outlet></Outlet>
            </div>
           
            
        
    );
};

export default Books;