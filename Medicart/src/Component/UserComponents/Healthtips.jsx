
function Healthtips() {
  return (
    <div className="min-h-screen bg-[#F2FAFC]">
      <section className="bg-gradient-to-r from-cyan-100 via-emerald-50 to-green-100">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-8 py-10 md:grid-cols-2">

          <div>
            <h1 className="mb-4 flex items-center gap-3 text-5xl font-extrabold text-emerald-800">
              <span>🍃</span>
              Health Tips
            </h1>

            <h2 className="mb-4 text-2xl text-slate-600">Simple tips for a healthier, happier you.</h2>

            <p className="max-w-lg text-base leading-7 text-slate-500"> Stay informed with expert advice, healthy habitsand wellness tips for a better tomorrow. </p>
          </div>

          <div className="relative flex h-72 items-center justify-center">
            <div className="absolute left-10 top-8 rounded-full bg-white p-4 text-3xl shadow">
              💚
            </div>

            <div className="absolute right-12 top-8 rounded-full bg-white p-4 text-3xl shadow">
              🍃
            </div>

            <div className="absolute bottom-10 left-16 z-10 rounded-xl bg-emerald-600 px-4 py-3 text-3xl text-white shadow">
              +
            </div>

            <div className="absolute bottom-8 right-8 text-6xl">
              🪴
            </div>

            <div className="relative mt-8 flex h-60 w-52 flex-col items-center justify-end rounded-t-full bg-emerald-100">
               <img src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg" className="h-80"  />
              </div>

             </div>
            </div>
          

         </section>

      {/* Featured Health Tips */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-emerald-800">
            Featured Health Tips
          </h2>

          <div className="my-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-7 bg-emerald-500"></span>
            <span className="text-xl text-emerald-500">🍃</span>
            <span className="h-0.5 w-7 bg-emerald-500"></span>
          </div>

          <p className="text-slate-500">
            Small changes can make a big difference in your health.
          </p>
        </div>

        {/* Health Tip Card 1 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-40 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
                alt="Healthy nutritious food"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
              Nutrition
            </span>

            <h3 className="mt-2 text-lg font-bold text-emerald-800">
              Eat Healthy, Stay Strong
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Choose nutritious foods to boost your energy, immunity and overall health.
            </p>

            <a href="#nutrition" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900">
              Read More →
            </a>
          </div>

          {/* Health Tip Card 2 */}
          <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-40 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=600&q=80"
                alt="Exercise and fitness"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="mt-3 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs text-sky-700">
              Fitness
            </span>

            <h3 className="mt-2 text-lg font-bold text-emerald-800">
              Stay Active Every Day
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Regular exercise keeps your heart healthy, improves mood and builds strength.
            </p>

            <a href="#fitness" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900">
              Read More →
            </a>
          </div>

          {/* Health Tip Card 3 */}
          <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-40 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
                alt="Comfortable sleeping environment"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700">
              Better Sleep
            </span>

            <h3 className="mt-2 text-lg font-bold text-emerald-800">
              Get Quality Sleep
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Good sleep helps your mind, body and immune system stay strong.
            </p>

            <a href="#sleep" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900">
              Read More →
            </a>
          </div>

          {/* Health Tip Card 4 */}
          <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-40 overflow-hidden rounded-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYFb-u0oY4hIjFDGW51artOrdrQki3mrvlNLDqTrmLg&s=10"
                alt="Refreshing lemon water"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="mt-3 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-700">
              Hydration
            </span>

            <h3 className="mt-2 text-lg font-bold text-emerald-800">
              Drink More Water
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Staying hydrated supports focus, digestion and keeps your skin healthy.
            </p>

            <a href="#hydration" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900">
              Read More →
            </a>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-100 px-6 py-6 sm:flex-row sm:px-10">

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-3xl">
              💡
            </div>

            <div>
              <h3 className="font-bold text-emerald-700">
                Healthy Habits. A Better You.
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Follow our health tips and take charge of your well-being.
              </p>
            </div>
          </div>

          <a
            href="#health-tips"
            className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Explore More Tips →
          </a>

        </div>

      </section>
    </div>
  );
}

export default Healthtips;
