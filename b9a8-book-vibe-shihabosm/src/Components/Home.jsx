import Allbook from "./Allbook";
import Hero from "./Hero";
import {useLoaderData} from 'react-router-dom'


const Home = () => {
    const books=useLoaderData()
    
    return (
        <div>
           
            <Hero></Hero>
            <Allbook books={books}></Allbook>
            
            
        </div>
    );
};

export default Home;