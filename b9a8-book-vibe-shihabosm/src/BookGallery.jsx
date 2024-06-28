

const BookGallery = () => {
    return (
        <div className="max-w-7xl mx-auto mt-12 ">
            <h2 className="text-center work-sans text-3xl font-semibold bg-slate-300 p-2 rounded-2xl">Book <span className="text-red-300 italic">Gallery</span></h2>
           <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://i.ibb.co/WptDWg4/glasses-1052010-640.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/2Fy6sd2/download.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/ZG6B7JY/download-1.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/VSLhbSB/images.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/KmVzqZJ/download.png" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/3sHtkxJ/images-1.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/3yd7D0G/images-2.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/QFRh00H/images-3.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/m4JnLbG/images-4.jpg" />
		<img src="https://i.ibb.co/QfpGGNb/images-5.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
            
        </div>
    );
};

export default BookGallery;