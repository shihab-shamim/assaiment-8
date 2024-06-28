import { FaUserFriends } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
const ReadBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  console.log(book);
  return (
    <div>
      <div className="card card-side border  p-4">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By:{author}</p>

          <div className="mt-4 flex gap-8">
            <h2 className="work-sans text-[16px] font-bold ">Tag</h2>
            {tags.map((tag, ind) => (
              <p
                key={ind}
                className="text-[#23BE0A] px-4 rounded-xl bg-[#23BE0A0D] w-[60px]"
              >
               # {tag}
              </p>
            ))}
            <p>Year of Publishing :{yearOfPublishing}</p>
          </div>
         <div className="flex gap-4 mt-4">
         <p className=" flex  items-center gap-2px"><FaUserFriends  /> Publisher: {publisher}</p>
          <p className=" flex  items-center gap-2px"><RiPagesLine /> pages:{totalPages}</p>
         </div>
         <div className="flex items-center gap-6">
            <div className="bg-[#328EFF26] w-[140px] px-4 rounded-xl">
                <p className="text-[#328EFF]">Category:{category}</p>
            </div>
            <div className="bg-[#FFAC3326] w-[140px] px-4 rounded-xl">
                <p className="text-[#FFAC33]">Raring:{rating}</p>
            </div>
            <div>
                <button className="text-white bg-[#23BE0A] py-2 px-4 rounded-3xl">View Details</button>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
