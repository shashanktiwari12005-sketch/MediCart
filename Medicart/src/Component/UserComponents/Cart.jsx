function Cart() {
    return (
        <div className=" min-h-screen bg-gradient-to-br from-blue-50 to-green-50 px-6 py-8">

            <h1 className="text-3xl font-bold text-gray-800">
                Shopping Cart
            </h1>
              <p className="text-gray-500 mt-2">
                Review your items before checkout
            </p>


            <div className="flex gap-6 mt-8">

                {/* Cart Items */}
                <div className="bg-sky-100 rounded-xl shadow-sm p-6 flex-1">
                 <h2 className="text-xl font-semibold text-gray-800 mb-5">Your Cart</h2>


                    {/* Product */}
                    <div className="flex items-center bg-sky-200 gap-5 p-4 border border-gray-200 rounded-lg">
                        <div className="w-24 h-24 bg-gray-100 rounded-lg p-2 flex items-center justify-center">
                            <img
                                src="https://1bpharmacy.com/_next/image?url=https%3A%2F%2Fcdn-1bharatpharmacy.s3.ap-south-1.amazonaws.com%2FBlog%2F1758530807782-pkbrqfb.png&w=3840&q=7"
                                className="w-20 h-20 object-contain"
                            />
                        </div>


                        {/* Product Details */}
                        <div className="flex-1">
                         <h3 className="text-lg font-semibold text-gray-800"> Paracetamol 650mg</h3>
                            <p className="text-sm text-gray-500 mt-1"> Pain Relie</p>
                             <p className="text-green-600 font-semibold mt-2">₹120</p>
                        </div>


                        {/* Quantity */}
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button className="px-3 py-1 text-green-600 hover:bg-gray-100">- </button>
                           <span className="px-3 py-1"> 1</span>
                             <button className="px-3 py-1 text-green-600 hover:bg-gray-100">+</button>
                          </div>

                        <p className="font-semibold text-gray-800 w-16 text-right">₹120 </p>
                        <button className="text-red-500 hover:text-red-700"> Remove</button>
                       </div>
                 </div>


                {/* Order Summary */}

                <div className="bg-sky-100 rounded-xl shadow-sm p-6 w-80 h-fit">
                    <h2 className="text-xl font-semibold text-gray-800"> Order Summary</h2>

                     <div className="flex justify-between mt-6 text-gray-600">
                        <span>Subtotal</span>
                        <span>₹120</span>
                    </div>


                    <div className="flex justify-between mt-3 text-gray-600">
                        <span>Delivery Charges</span>
                        <span>₹40</span>
                    </div>


                    <div className="border-t border-gray-200 mt-5 pt-5 flex justify-between">
                       <span className="font-bold text-gray-800"> Total </span>
                       <span className="font-bold text-green-600 text-xl"> ₹160 </span>
                   </div>


                    <button className="w-full bg-green-700 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-green-600 transition">
                        Proceed to Checkout
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Cart;