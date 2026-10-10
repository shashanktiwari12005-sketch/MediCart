function Medicines() {
  return (
      
    <section className="py-8 px-4 bg-[#F2FAFC]">
      <h1 className=" text-2xl font-bold text-gray-800">Medicines shop</h1>
      <p className=" py-1 mb-2 text-sm text-gray-500">Get genuine medicines at the best prics. Your health is our priority."</p>
  
    <div className="grid grid-cols-2 md:grid-cols-4  gap-4" >

    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
           <img src="data:image/jpeg;base64,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" className="mx-auto w-35 h-18"/>
           <h2 className="h-7 font-bold">Paracetamol</h2>
            <p className="text-xs text-gray-500 mt-1">Fever Relief</p>
            <p>price: ₹25 </p>
            <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
     </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnkTXIKTF_BXvwamkhhkKX2x-u0MZrtrr0kqcl_ZLHQ&s=10" className="mx-auto w-35 h-18"/>
              <h2 className="h-7 font-bold">Ibuprofen</h2>
             <p className="text-xs text-gray-500 mt-1">Pain Relief</p>
              <p>price: ₹26 </p>
              <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3lUYo7xvfaTzXXK-DPFfsnmlUgKtsCjfdpeG5YbNtw&s=10" className="mx-auto w-35 h-18 "/>
                 <h2 className="h-7 font-bold">Azithromycin</h2>
                <p className="text-xs text-gray-500 mt-1">Infection</p>
                <p>price: ₹33 </p>
                <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9ECwxe1Wg3Vz2oiOV-eoWxMi_4M7GcWYhhDX1NDCAg&s=10" className="mx-auto w-35 h-18"/>
           <h2 className="h-7 font-bold">Amoxicillin</h2>
           <p className="text-xs text-gray-500 mt-1">Infection</p>
            <p>price: ₹20 </p>
            <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
     </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WErrPOgamLv8yjlqwYlkg0Kw2mkPIrHjCl3sxP0L-w&s=10" className="mx-auto w-35 h-18"/>
           <h2 className="h-7 font-bold">Cetirizine</h2>
             <p className="text-xs text-gray-500 mt-1">Allergy Relief</p>
              <p>price: ₹60 </p>
              <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8GNffCqpQ9R8ThNIRYuHhLKRlPNiCMe-csQfoPn1Jg&s=10" className="mx-auto w-35 h-18"/>
             <h2 className="h-7 font-bold">Levocetirizine</h2>
                <p className="text-xs text-gray-500 mt-1">Allergy Relief</p>
                <p>price: ₹27 </p>
                <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLHPwa06dOp2SjwFxe14QZZi4RI_vxOujAB2YwZe04Q&s=10" className="mx-auto w-35 h-18"/>
           <h2 className="h-7 font-bold">Pantoprazole</h2>
           <p className="text-xs text-gray-500 mt-1">Acidity Relief</p>
            <p>price: ₹25 </p>
            <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
     </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DttGt8YoWyzw-0gI0E_SgIu0wygB_2gPQt_Ldu3SGg&s=10" className="mx-auto w-35 h-18"/>
           <h2 className="h-7 font-bold">Omeprazole</h2>
             <p className="text-xs text-gray-500 mt-1">Acidity Relief</p>
              <p>price: ₹22 </p>
              <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvfETiGVAICo9zifhMLUfumqKQxuDQ5734Na25fnyvw&s=10" className="mx-auto w-35 h-18"/>
             <h2 className="h-7 font-bold">Diclofenac</h2>
                <p className="text-xs text-gray-500 mt-1">Pain Relief</p>
                <p>price: ₹20 </p>
                <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuekkgVhnPQIfClnVb9itpX28mBkddwkwh36EzIiG-qg&s" className="mx-auto w-35 h-18"/>
           <h2 className="h-7 font-bold">Metformin</h2>
             <p className="text-xs text-gray-500 mt-1">sugar control</p>
              <p>price: ₹40 </p>
              <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WbWHQwYCTQArULCaGgtFCj2jM1ed_lnTNuw1rNYL3A&s=10" className="mx-auto w-35 h-18"/>
             <h2 className="h-7 font-bold">Amlodipine</h2>
                <p className="text-xs text-gray-500 mt-1">BP control</p>
                <p>price: ₹35 </p>
                <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYecSlt4Wr6ODmFCurX3XUpUaOpW9pPRBMqHVGQl01mQ&s=10" className="mx-auto w-35 h-18"/>
           <h2 className="h-7 font-bold">Losartan</h2>
             <p className="text-xs text-gray-500 mt-1">BP control</p>
              <p>price: ₹15 </p>
              <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

     <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYVkfugPfsqV2xuyBMZaIWJcYF-TrS-r1xCcH9hbio1ca46W3RTScSLqV&s=10" className="mx-auto w-35 h-18"/>
             <h2 className="h-7 font-bold">ORS</h2>
                <p className="text-xs text-gray-500 mt-1">Rehydration</p>
                <p>price: ₹24 </p>
                <button  className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UHMP-8LVJ9IMFSW5eywJR6HTrkFKt0S20p1i-3mcbA&s=10" className="mx-auto w-35 h-18"/>
      <h2 className="h-7 font-bold">Azithromycin</h2>
      <p className="text-xs text-gray-500 mt-1">Infection Treatment</p>
      <p>Price: ₹25 </p>
      <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AtWrcVyn8IQCppCqTdGvoIIDk_I4Ywjx9SEVC1DNqQ&s=10" className="mx-auto w-35 h-18"/>
      <h2 className="h-7 font-bold">Diclofenac</h2>
      <p className="text-xs text-gray-500 mt-1">Pain Releif</p>
      <p>Price: ₹20 </p>
      <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm text-center w-full mx-auto h-55">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNu-q5Ewxaot6JbBi2AP5illbc88YYuIgIqNA8uDa3NiwpsYytOUKhbYbs&s=10" className="mx-auto w-35 h-18"/>
      <h2 className="h-7 font-bold">Metformin</h2>
      <p className="text-xs text-gray-500 mt-1">Blood Sugar Control</p>
      <p>Price: ₹70</p>
      <button className="text-white bg-green-700 px-3 py-1 rounded-lg font-medium  mt-3">Add to Cart</button>
    </div>

    </div>
    </section>
  );
}

export default Medicines;