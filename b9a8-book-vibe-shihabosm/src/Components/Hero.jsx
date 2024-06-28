import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto mt-12 ">
            <div className="hero  bg-base-200 py-12 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse gap-4 sm:gap-48">
    <img src="https://i.ibb.co/TTBHbvT/pngwing-1-1.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="  text-4xl lg:text-[56px] font-bold playfair ">Books to freshen up <br /> your bookshelf</h1>
     
      <Link to='/books'> <button className="btn text-white mt-8 bg-[#23BE0A]">View The List</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Hero;