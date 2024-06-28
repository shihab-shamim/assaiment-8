import { useEffect, useState } from "react";
import { getBooks } from "./Utils/Localstorage";
import ReadBook from "./ReadBook";


const ReadBooks = () => {
    const [books,setBooks]=useState([])

    useEffect(()=>{
        const storedBooks=getBooks()
        setBooks(storedBooks)
    },[])
    return (
        <div className="mt-12 space-y-2">
           {
            books.map(book=><ReadBook key={book.id} book={book}></ReadBook>)
           }
            
        </div>
    );
};

export default ReadBooks;