import React from "react";
import "./index.css";

function LandingPage() {
  return (
    <div>
      <div className="bg-slate-100">
        {/* <!-- navbar (main menu)--> */}
        <div className="flex justify-between container mx-auto max-sm:mt-6 max-sm:px-7 py-6 px-28 ">
          <div className="flex">
            <img src="./src/assets/Rectangle 74.png" alt="" />
          </div>
          <div className="flex max-sm:hidden">
            <a href="#" className="block px-4 py-2">
              Our Service
            </a>
            <a href="#" className="block px-4 py-2">
              Why Us
            </a>
            <a href="#" className="block px-4 py-2">
              Testimonial
            </a>
            <a href="#" className="block px-4 py-2">
              FAQ
            </a>
            <a
              href="/"
              className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
            >
              Logout
            </a>
          </div>
          <div className="hidden max-sm:flex">
            <img src="./src/assets/fi_menu.png" width="50px" height="50px" />
          </div>
        </div>

        {/* <!-- header  --> */}
        <div className="flex justify-between container mx-auto px-28 py-12 max-sm:flex-col max-sm:px-6 max-sm:py-0">
          <div className="flex-1">
            <div className="py-16 flex-col items-start">
              <div className="text-3xl font-bold sm:mr-32">
                Sewa & Rental Mobil Terbaik di kawasan (Medan)
              </div>
              <div className="py-6 sm:mr-32">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </div>

              <div className="">
                <button
                  type="button"
                  className="bg-green-500 rounded-sm hover:bg-blue-600 text-white py-2 px-3"
                >
                  Mulai Sewa Mobil
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col items-start">
            <img src="./src/assets/img_car.png" width="700px" height="700px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
