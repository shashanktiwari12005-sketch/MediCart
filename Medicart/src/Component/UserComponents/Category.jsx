function Category(){
    return(
        <section className="py-8 px-4">
            <h2 className=" text-2xl font-bold text-gray-800">Shope by Category</h2>
            <p className=" py-1 mb-2 text-sm text-gray-500">Explore our wide range of medicines and healthcare products</p>

            {/* Category card*/}

             <div className="grid grid-cols-2 md:grid-cols-4  gap-4">

            <div className="bg-green-700 border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48 ">
                
                <img src="https://cdnai.iconscout.com/ai-image/premium/thumb/ai-bottle-of-mild-pain-reliever-pills-3d-icon-png-download-jpg-14535408.png" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Pain Relief</h3>
                <p className="text-xs text-gray-500 mt-1">120+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">shop Now</button>
 
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGzWZvHwDILCbPCXeZwkAimdim8tl6nL_WvPGIN7oCgW52d4h2fZ6FjuG&s=10" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Vitamins & Supplements</h3>
                <p className="text-xs text-gray-500 mt-1">200+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">shop Now</button>

            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://img.magnific.com/free-photo/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file_1387-942.jpg?semt=ais_hybrid&w=740&q=80" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Diabetes care</h3>
                <p className="text-xs text-gray-500 mt-1">150+ Products</p>
                <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">shop Now</button>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://png.pngtree.com/png-clipart/20241003/original/pngtree-tissue-box-overflowing-with-used-tissues-and-nasal-spray-nearby-created-png-image_16167389.png" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Cold & Flu</h3>
                <p className="text-xs text-gray-500 mt-1">100+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">shop Now</button>
            </div>

            
            </div>

            <div className="text-right mt-1 mb-1">
                <a href="categories" className="text-green-700">View all Categories →</a>
            </div>
        </section>
    );
}
export default Category;