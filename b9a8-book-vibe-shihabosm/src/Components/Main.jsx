import Nav from "./Nav/Nav";
import {Outlet} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const Main = () => {
    return (
        <div>
            <Nav></Nav>
          
            <Outlet></Outlet>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>

        </div>
    );
};

export default Main;