function Hero() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-cyan-100 via-emerald-50 to-green-100 px-6 py-6 md:px-8 lg:px-12 lg:py-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">

        {/* Left Side */}
        <div className="w-full md:w-1/2">

          <span className="inline-block rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🌿 Your Health, Our Priority
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Better Health,
            <span className="block text-green-700">
              Better Life.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Your trusted online pharmacy for genuine medicines and
            healthcare products. Order your essentials and get them
            delivered right to your doorstep.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">

            <a
              href="/Medicines"
              className="rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-green-800"
            >
              Shop Medicines →
            </a>

            <a
              href="/Categories"
              className="rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-700/20 transition hover:bg-green-800"
            >
              Explore Categories
            </a>

          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">

            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xl">
                ✓
              </span>
              <div>
                <p className="font-semibold text-gray-800">Genuine Products</p>
                <p className="text-sm text-gray-500">Trusted quality</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl">
                🚚
              </span>
              <div>
                <p className="font-semibold text-gray-800">Home Delivery</p>
                <p className="text-sm text-gray-500">At your doorstep</p>
              </div>
            </div>

          </div>
        </div>

        
        <div className="flex w-full justify-center md:w-1/2">

          <div className="relative flex w-full max-w-lg items-center justify-center rounded-3xl bg-green-100 p-5 sm:p-8">
            <div className="absolute right-5 top-5 rounded-2xl bg-white px-4 py-3 shadow-md">
              <p className="text-sm font-medium text-gray-500">
                Your Wellness
              </p>
              <p className="font-bold text-green-700">
                Our Mission 💚
              </p>
            </div>

         <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjZPiAWKCO9Q1OnnpGHzce3K0XlRcEZuJuBTdbtzEqQ&s=10"
             alt="Female doctor"
             className="w-full h-96 object-contain sm:h-[450px] lg:h-[500px]"
              />


          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;


