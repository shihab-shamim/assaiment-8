import { NavLink } from "react-router-dom";


const Nav = () => {
 
    return (
        <div className="max-w-7xl mx-auto">
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      
    <NavLink to='/'  className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Home</NavLink>
    <NavLink to='/books' className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Listed Books</NavLink>
    <NavLink to='/pages' className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Pages to Read</NavLink>
    <NavLink to='/gallery' className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Books Gallery</NavLink>
    <NavLink to='/contact' className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Contact</NavLink>
   
       
      </ul>
    </div>
    <a className="btn btn-ghost  work-sans font-bold text-[28px]">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal flex justify-center items-center gap-8 work-sans ">
    <NavLink to='/'  className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Home</NavLink>
    <NavLink to='/books' className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Listed Books</NavLink>
    <NavLink to='/pages' className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Pages to Read</NavLink>
    <NavLink to='/gallery' className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Books Gallery</NavLink>
    <NavLink to='/contact' className={({isActive})=>isActive?'text-[#23BE0A] border border-[#23BE0A] px-2 font-bold py-2 rounded-md':'font-bold'}>Contact</NavLink>
     
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
    <a className="btn bg-[#59C6D2] text-white">Sign up</a>

  </div>
</div>
            
        </div>
    );
};

export default Nav;