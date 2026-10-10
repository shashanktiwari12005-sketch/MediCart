
function Offers() {
  return (
    <div className="min-h-screen bg-[#F2FAFC] py-1">

      {/* Offer Card */}
      <section className="rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-100 via-emerald-50 to-green-100">

        <div className=" pl-30 pr-30 flex items-center justify-between py-2 px-2">

          {/* Left Side */}
          <div className="w-1/2">

            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏷 Special Offers
            </span>

            <h1 className="text-5xl font-bold text-blue-900 leading-tight">
              Save More on
              <span className="block text-green-600">
                Your Health
              </span>
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Get up to 50% off on your favorite medicines.
              <br />
              Stay healthy, stay happy with MediCart!
            </p>

            <button className="mt-5 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Shop Now →
            </button>

          </div>

          {/* Right Side */}
          <div className="w-1/2 flex items-center justify-center gap-8">

            {/* Discount Circle */}
            <div className="bg-green-600 text-white w-40 h-40 rounded-full flex flex-col items-center justify-center rotate-[-5deg]">
              <span className="text-xl font-bold">UP TO</span>
              <span className="text-5xl font-extrabold">50%</span>
              <span className="text-xl font-bold">OFF</span>
            </div>

            {/* Medicine Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5c2f64vi2_Fh3FDVAS9GvOHPL6UUUoGbLHXZGswH8w&s=10"
              className="mx-auto w-100 h-80"
            />

          </div>

        </div>
        </section>


        {/* Current Offers */}
        <section>
        <div className="px-10 py-5">

          <h1 className="text-2xl font-bold ">
            Current Offers
          </h1>

          <p className="text-gray-600">
            Top deals on essential medicines
          </p>
        </div>

        {/* Medicine Card */}
         <div className="grid grid-cols-2 md:grid-cols-4  gap-4" >
       
        <div className="px-10 py-6">
       <div className="relative bg-white rounded-xl shadow-md p-4 w-80">
      <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full"> 20% OFF</span>
      <span className="absolute top-3 right-3 text-gray-400 text-xl">♡ </span>
        <div className="h-40 flex items-center justify-center mt-5">
      <img  src="https://www.iqdoctor.co.uk/product_images/paracetamol-500mg-effervescent-tablets.png" className="w-64 h-50"/>
    </div>
     <h2 className="text-lg font-bold text-blue-900"> Paracetamol 500mg</h2>
    <p className="text-sm text-gray-500">Pain Relief & Fever</p>
   <div className="flex items-center gap-3 mt-2">
   <span className="text-gray-400 line-through">₹60</span>
    <span className="text-green-600 text-xl font-bold"> ₹48</span>
    </div>
 <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"> 🛒 Add to Cart </button>
</div>
  </div>


  <div className="px-10 py-6">
<div className="relative bg-white rounded-xl shadow-md p-4 w-80">
  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full"> 20% OFF</span>
    <span className="absolute top-3 right-3 text-gray-400 text-xl">♡ </span>
   <div className="h-40 flex items-center justify-center mt-5">
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3lUYo7xvfaTzXXK-DPFfsnmlUgKtsCjfdpeG5YbNtw&s=10" className="w-64 h-50"/>
    </div>
   <h2 className="text-lg font-bold text-blue-900">Azithromycin 500mg</h2>
    <p className="text-sm text-gray-500">Infection</p>
    <div className="flex items-center gap-3 mt-2">
    <span className="text-gray-400 line-through">₹60</span>
    <span className="text-green-600 text-xl font-bold"> ₹48</span>
    </div>
    <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"> 🛒 Add to Cart </button>
</div>
  </div>


  <div className="px-10 py-6">
 <div className="relative bg-white rounded-xl shadow-md p-4 w-80">
  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full"> 20% OFF</span>
    <span className="absolute top-3 right-3 text-gray-400 text-xl">♡ </span>
      <div className="h-40 flex items-center justify-center mt-5">
      <img  src="https://www.iqdoctor.co.uk/product_images/paracetamol-500mg-effervescent-tablets.png" className="w-64 h-50"/>
    </div>
     <h2 className="text-lg font-bold text-blue-900"> Paracetamol 500mg</h2>
    <p className="text-sm text-gray-500">Pain Relief & Fever</p>
   <div className="flex items-center gap-3 mt-2">
   <span className="text-gray-400 line-through">₹60</span>
    <span className="text-green-600 text-xl font-bold"> ₹48</span>
    </div>
   <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"> 🛒 Add to Cart </button>
</div>
  </div>


<div className="px-10 py-6">
 <div className="relative bg-white rounded-xl shadow-md p-4 w-80">
  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full"> 20% OFF</span>
    <span className="absolute top-3 right-3 text-gray-400 text-xl">♡ </span>
    <div className="h-40 flex items-center justify-center mt-5">
      <img  src="https://www.iqdoctor.co.uk/product_images/paracetamol-500mg-effervescent-tablets.png" className="w-64 h-50"/>
    </div>
     <h2 className="text-lg font-bold text-blue-900"> Paracetamol 500mg</h2>
    <p className="text-sm text-gray-500">Pain Relief & Fever</p>
   <div className="flex items-center gap-3 mt-2">
  <span className="text-gray-400 line-through">₹60</span>
    <span className="text-green-600 text-xl font-bold"> ₹48</span>
    </div>
     <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"> 🛒 Add to Cart </button>
</div>
  </div>
  </div>
     </section>

     <footer className="mt-12 flex itwem-center justify-between gap-6 rounded-2xl bg-emerald-100 p-8">
      <div>
        <h2 className="text-2xl font-bold text-emerald-800">Good Health is always in Style</h2>
        <p className="mt-2 text-gray-600">Save your favorite medicines and take care of Your health.</p>
      </div>
      <div className="text-8xl">
        <span>🌿</span>
      </div>
     </footer>
         </div>
  );
}

export default Offers;

