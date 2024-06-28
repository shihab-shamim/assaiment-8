import toast from 'react-hot-toast'
export const getBooks=()=>{
    let books=[]
  const  stored= localStorage.getItem('books');

    if(stored){
        books=JSON.parse(stored)
    }
    return books;

}

export const saveBook=book=>{
    let books =getBooks();
    const isExist =books.find(b=>b.bookId === book.bookId)
    if(isExist){
        return toast.error('Already Read')
    }
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books))
    toast.success('Book Added  to ReadList')
}

export const getWishList=()=>{
    let wishBooks=[]
  const  storedWish= localStorage.getItem('wish');

    if(storedWish){
        wishBooks=JSON.parse(storedWish)
    }
    return wishBooks;

}


export const wishList=book=>{
    let wishBooks=getWishList();
    const remaining =wishBooks.filter(b=> b.bookId == book.bookId);

   
    if(remaining.length > 0){
       
            return toast.error('you  have Already Read this Books')
        
    }
    wishBooks.push(book);
    localStorage.setItem('wish',JSON.stringify(wishBooks))
    toast.success('Book Added to WishList')
}

