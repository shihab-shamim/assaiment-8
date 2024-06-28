import ReadBook from "./ReadBook";
import { getWishList, wishList } from "./Utils/Localstorage";
import { useEffect, useState } from "react";


const WishList = () => {

    const [books,setBooks]=useState([])

    useEffect(()=>{
        const storedBooks= getWishList()
        setBooks(storedBooks)
    },[])
   
    return (
        <div>
                 <div className="mt-12 space-y-2">
           {
            books.map(book=><ReadBook key={book.id} book={book}></ReadBook>)
           }
            
        </div>
        </div>
    );
};

export default WishList;