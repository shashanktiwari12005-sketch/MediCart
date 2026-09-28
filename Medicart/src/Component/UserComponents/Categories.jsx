function Categories(){
    return(
        <section className="py-8 px-4">
            <h2 className=" text-2xl font-bold text-gray-800">Shope by Category</h2>
            <p className=" py-1 mb-2 text-sm text-gray-500">Explore our wide range of medicines and healthcare products</p>

            {/* Category card*/}

             <div className="grid grid-cols-2 md:grid-cols-4  gap-4">

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                
                <img src="https://cdnai.iconscout.com/ai-image/premium/thumb/ai-bottle-of-mild-pain-reliever-pills-3d-icon-png-download-jpg-14535408.png" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Pain Relief</h3>
                <p className="text-xs text-gray-500 mt-1">120+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Shop Now</button>
 
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGzWZvHwDILCbPCXeZwkAimdim8tl6nL_WvPGIN7oCgW52d4h2fZ6FjuG&s=10" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Vitamins & Supplements</h3>
                <p className="text-xs text-gray-500 mt-1">200+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Shop Now</button>

            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://img.magnific.com/free-photo/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file_1387-942.jpg?semt=ais_hybrid&w=740&q=80" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Diabetes care</h3>
                <p className="text-xs text-gray-500 mt-1">150+ Products</p>
                <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Shop Now</button>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://png.pngtree.com/png-clipart/20241003/original/pngtree-tissue-box-overflowing-with-used-tissues-and-nasal-spray-nearby-created-png-image_16167389.png" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Cold & Flu</h3>
                <p className="text-xs text-gray-500 mt-1">100+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Shop Now</button>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkFe9DA0KdHEIgTeCoqcLtfRmmq8PvitYbIVQKiPJvg&s=10" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Personal Care</h3>
                <p className="text-xs text-gray-500 mt-1">180+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Shop Now</button>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
               <img src="https://english.cdn.zeenews.com/sites/default/files/2022/10/31/1110640-first-aid.jpg" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">First Aid</h3>
                <p className="text-xs text-gray-500 mt-1">90+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Shop Now</button>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://m.media-amazon.com/images/I/61lmTWS6ZBL.jpg" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Mother & Baby</h3>
                <p className="text-xs text-gray-500 mt-1">160+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Shop Now</button>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center h-48">
                <img src="https://assets.delveinsight.com/blog/wp-content/uploads/2022/06/08212929/at-home-medical-equipment-and-devices.png" className="mx-auto w-16 h-16"/>
                <h3 className="h-10">Healthcare Dvices</h3>
                <p className="text-xs text-gray-500 mt-1">80+ Products</p>
                <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Shop Now</button>
            </div>

            <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR305nNRSKC5OvIIfZ9UtQtGkGNB-QDeeD4KCautMFpD-TQC6J88UvE5wVR&s=10"/>
               <h3>Generic Medicine</h3>
               <p>150+ Product</p>
               <button>Shop now</button>
            </div>

            <div>
               <img src="https://m.media-amazon.com/images/I/71+KCud2j0L._AC_UF1000,1000_QL80_.jpg"/>
               <h3>Bone & Joint Care</h3>
               <p>20+ Product</p>
               <button>Shop now</button>
            </div>

            <div>
               <img src="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/ec056fde520b4fae873862d1eeb1756e/618ddrgzgjl-1024x1024.jpeg"/>
               <h3>Nutrition & Health Drinks</h3>
               <p>50+ Product</p>
               <button>Shop now</button>
            </div>

            <div>
               <img src="https://organicindia.com/cdn/shop/files/Triphala180_Front.png?v=1767156676&width=1206"/>
               <h3>Ayurvedic / Herbal</h3>
               <p>110+ Product</p>
               <button>Shop now</button>
            </div>

            <div>
               <img src="https://gracecare-support.com/wp-content/uploads/2020/05/Hinged-Knee-Brace-for-Joint-Support-GC-KP420-1.png"/>
               <h3>Orthopedic Support</h3>
               <p>90+ Product</p>
               <button>Shop now</button>
            </div>

            <div>
               <img src="data:image/jpeg;base64,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"/>
               <h3>Personal Care</h3>
               <p>30+ Product</p>
               <button>Shop now</button>
            </div>

            <div>
               <img src="https://northjerseyrecovery.com/wp-content/uploads/2022/10/njrc_prescription-drugs.jpg"/>
               <h3>Perscription Medicine</h3>
               <p>20+ Product</p>
               <button>Shop now</button>
            </div>

            <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9R6wdMmnCUTuzcruoEbI9441titajjfKsoePQ0_xDt5R8gVC-ZDUX4gh&s=10"/>
               <h3>Skin Care</h3>
               <p>150+ Product</p>
               <button>Shop now</button>
            </div>

            </div>

            
            </section>
    );
}
export default Categories;
