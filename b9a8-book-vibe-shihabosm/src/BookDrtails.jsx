import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {ClipLoader} from 'react-spinners'
import { saveBook, wishList } from './Utils/Localstorage';
import toast from 'react-hot-toast'


const BookDrtails = () => {
    
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('https://shihabosm.github.io/fack/fake.json')
      .then(res => res.json())
      .then(data => {
        const foundBook = data.find(book => book.bookId === parseInt(id));
        setBook(foundBook); 
      })
      .catch(error => console.error('Error fetching book:', error));
  }, [id]);

  if (!book) {
    return <div className='flex justify-center'><ClipLoader></ClipLoader></div>;
  }

  const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

   const read=book=>{
    console.log(book)
    saveBook(book)
        // toast.success('jnjksdnsdg')
  
   }
    
   const wish=book=>{
    console.log(book)
    wishList(book)
   }
      
    return (
        <div className="max-w-7xl mx-auto mt-12 ">
           <section className="">
	<div className=" container flex flex-col  p-6 mx-auto sm:py-12  lg:flex-row ">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 ">
			<img src={image} alt="" className="  w-[400px]  bg-cover object-cover" />
		</div>
		<div  className="w-full lg:w-1/2 flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className='text-[40px] playfair font-bold'>{bookName}
			</h1>
			<p className='work-sans font-medium text-[20px]'> By:{author}
			</p>
            <hr className='w-full border border-gray-300 mt-2'/>
            <p className='work-sans font-medium text-[20px] mt-2 text-[#131313CC]'>{category}</p>
             <hr className='w-full border border-gray-300 mt-2'/>

             
             <h3><span className='work-sans text-[16px] font-bold'>Review:</span>{review}At its heart, The Great Gatsby is a story of longing and the human capacity for self-deception. s relentless pursuit of wealth and status is ultimately revealed to be a hollow attempt to recapture a past that is forever out of reach. As the novel unfolds, Fitzgerald skillfully exposes the emptiness that lies beneath the facade of glamour, laying bare the moral decay that lurks beneath the surface of American society.</h3>

             <div className='mt-4 flex gap-8'>
              <h2 className='work-sans text-[16px] font-bold '>Tag</h2>
              {
                
                  tags.map((tag,ind)=><p key={ind} className='text-[#23BE0A] px-4 rounded-xl bg-[#23BE0A0D]'>{tag}</p>)
              
              }
             </div>
             <hr className='w-full border border-gray-300 mt-4'/>
             <div className='flex gap-6'>
              <p>Number of Pages:</p>
              <h2 className='work-sans text-[16px] font-semibold'>{totalPages}</h2>
             </div>
             <div className='flex gap-20'>
              <p>Publisher:</p>
              <h2 className='work-sans text-[16px] font-semibold'>{publisher}</h2>
             </div>
             <div className='flex gap-4'>
              <p>Year of Publishing:</p>
              <h2 className='work-sans text-[16px] font-semibold'>{yearOfPublishing}</h2>
             </div>
             <div className='flex gap-28'>
              <p>Rating</p>
              <h2 className='work-sans text-[16px] font-semibold'>{rating}</h2>
             </div>
           <div className='mt-6 space-x-4'>
            <button onClick={()=>read(book)} className=' border  px-6 py-2 rounded-lg'>Read</button>
            <button onClick={()=>wish(book)} className='btn bg-[#50B1C9] text-white'>Wishlist</button>
           </div>
		
		</div>
	</div>
</section>
            
        </div>
    );
};

export default BookDrtails;