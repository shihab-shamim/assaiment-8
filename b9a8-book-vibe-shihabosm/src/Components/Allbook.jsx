import Book from "./Book";


const Allbook = ({books}) => {
    return (
        <div className="max-w-7xl mx-auto mt-12 ">
            <h1 className="text-center playfair font-bold text-[40px]">Books:</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)

                }
            </div>
            
        </div>
    );
};

export default Allbook;