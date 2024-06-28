import { MdStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {image,bookName,author,rating,category,tags,bookId}=book
    return (
        <Link to={`/book/${bookId}`}>
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="flex gap-6 playfair justify-center text-[#23BE0A] text-bold mt-4">
            {
                tags.map(tag=><p key={tag}>{tag}</p>)
            }
        </div>
        <div className="card-body  ">
          <h2 className="card-title playfair">{bookName}</h2>
          <p className="playfair">By:{author}</p>
          <hr className="border-dashed border-gray-400" />
          <div className="flex">
            <p>{category}</p>
            <p className="flex justify-center items-center">{rating} <MdStarBorder size={20} /></p>
            
          </div>
        </div>
      </div>
      </Link>
    );
};

export default Book;