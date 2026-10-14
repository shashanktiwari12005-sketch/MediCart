function Prescription() {
  return (
    <div>

      {/* Prescription Upload Banner */}
      <section className="mx-4 mt-6 rounded-2xl bg-emerald-50 px-6 py-6 md:mx-8 md:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Left Side */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Have a prescription?
            </h2>

            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Upload your prescription and we'll help you
              find the right medicines.
            </p>

            <button className="mt-4 rounded-lg border border-emerald-600 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white">
              ↥ Upload Prescription
            </button>
          </div>

          {/* Center Icon */}
          <div className="text-7xl">📋</div>

          {/* Right Side */}
          <div className="space-y-3 text-sm text-slate-700">
            <p>✅ Safe & Secure</p>
            <p>✅ Quick Processing</p>
            <p>✅ Partner Pharmacies</p>
          </div>

        </div>
      </section>

      {/* Why Choose MediCart */}
      <section className="mx-4 mb-8 mt-6 md:mx-8">

        <h2 className="text-2xl font-bold text-slate-800">
          Why Choose MediCart?
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your trusted partner in healthcare
        </p>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Genuine Medicines */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-2xl">
              🛡️
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Genuine Medicines
              </h3>
              <p className="text-sm text-slate-500">
                Sourced from verified pharmacies
              </p>
            </div>
          </div>

          {/* Fast Delivery */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-2xl">
              🚚
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Fast & Reliable Delivery
              </h3>
              <p className="text-sm text-slate-500">
                Get your order at your doorstep
              </p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-2xl">
              💳
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Secure Payments
              </h3>
              <p className="text-sm text-slate-500">
                100% safe and encrypted
              </p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-2xl">
              🎧
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                24/7 Support
              </h3>
              <p className="text-sm text-slate-500">
                We're always here to help
              </p>
            </div>
          </div>

        </div>
      </section>

    

      <footer className="mt-8 bg-slate-50 px-6 py-6 text-slate-600">

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-5">

        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Medi<span className="text-emerald-600">Cart</span>✚
          </h2>

          <p className="text-xs font-medium text-slate-700">
            Your Health, Our Priority
          </p>

          <p className="mt-3 text-xs leading-5">
            Making healthcare accessible and
            <br />
            a healthier tomorrow for everyone.
          </p>

          {/* Social Icons */}
          <div className="mt-3 flex gap-3 text-sm font-bold text-slate-700">
            <a href="#" aria-label="Facebook" className="hover:text-emerald-600">f</a>
            <a href="#" aria-label="Instagram" className="hover:text-emerald-600">◎</a>
            <a href="#" aria-label="X" className="hover:text-emerald-600">𝕏</a>
            <a href="#" aria-label="YouTube" className="hover:text-emerald-600">▶</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-emerald-600">in</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-2 text-sm font-bold text-slate-800">
            Quick Links
          </h3>

          <ul className="space-y-1 text-xs">
            <li><a href="/" className="hover:text-emerald-600">Home</a></li>
            <li><a href="/Medicines" className="hover:text-emerald-600">Medicines</a></li>
            <li><a href="/Categories" className="hover:text-emerald-600">Categories</a></li>
            <li><a href="/Offers" className="hover:text-emerald-600">Offers</a></li>
            <li><a href="/Healthtips" className="hover:text-emerald-600">About Us</a></li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="mb-2 text-sm font-bold text-slate-800">
            Customer
          </h3>

          <ul className="space-y-1 text-xs">
            <li><a href="#" className="hover:text-emerald-600">Track Order</a></li>
            <li><a href="#" className="hover:text-emerald-600">My Prescriptions</a></li>
            <li><a href="#" className="hover:text-emerald-600">Profile</a></li>
            <li><a href="#" className="hover:text-emerald-600">Help & Support</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-2 text-sm font-bold text-slate-800">
            Legal
          </h3>

          <ul className="space-y-1 text-xs">
            <li><a href="#" className="hover:text-emerald-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-emerald-600">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-emerald-600">Refund Policy</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="mb-2 text-sm font-bold text-slate-800">
            Download App
          </h3>

          <p className="mb-3 text-xs">
            Get the MediCart app
          </p>

          <div className="flex flex-wrap gap-2">

            <a
              href="#"
              className="rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-700"
            >
              ▶ Google Play
            </a>

            <a
              href="#"
              className="rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-700"
            >
               App Store
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-5 max-w-7xl border-t border-slate-200 pt-3 text-center text-xs text-slate-500">
        © 2026 MediCart. All rights reserved.
      </div>

    </footer>
    </div>
  );
}

export default Prescription;
