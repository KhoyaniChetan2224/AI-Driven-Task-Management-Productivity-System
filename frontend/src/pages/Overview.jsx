import React from "react";
import Header from "./Header";
import heroImage from "../img/Overview.PNG";

const HeroSection = () => {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#f4f5f7] to-[#eef2ff] pt-24">

        {/* Background Decoration */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

            {/* Left Side */}
            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold text-sm mb-8">
                🚀 Project Management Platform
              </div>

              <h1 className="text-[45px] md:text-[65px] xl:text-[78px] font-black leading-[1.05] text-[#091E42]">
                Get to know Jira's
                <span className="block">
                  project management
                </span>
                <span className="block">
                  features
                </span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Built to help every team go from big idea to launch faster.
                Plan, track, collaborate, and deliver projects with powerful
                tools trusted by millions of teams worldwide.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="bg-[#0052CC] hover:bg-[#0747A6] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 duration-300">
                  Try Jira Free
                </button>

                <button className="border-2 border-[#091E42] text-[#091E42] hover:bg-[#091E42] hover:text-white px-10 py-5 rounded-full font-bold text-lg duration-300">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>
                  <h3 className="text-4xl font-black text-[#0052CC]">
                    100K+
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Active Teams
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-[#00B8D9]">
                    250+
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Integrations
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-[#36B37E]">
                    99.9%
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Uptime
                  </p>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-center items-center">

              {/* Green Frame */}
              <div className="absolute inset-0 border-[18px] border-[#8BC34A] rounded-2xl scale-95"></div>

              {/* Main Dashboard Image */}
              <img
                src={heroImage}
                alt="Jira Dashboard"
                className="relative z-10 w-full rounded-2xl shadow-[0_35px_80px_rgba(0,0,0,0.15)]"
              />

              {/* Progress Badge */}
              <div className="absolute bottom-16 left-[35%] z-30">
                <div className="bg-blue-100 backdrop-blur-lg px-8 py-4 rounded-2xl shadow-xl border border-blue-200">
                  <span className="text-blue-700 font-black text-xl">
                    IN PROGRESS
                  </span>
                </div>
              </div>

              {/* Done Badge */}
              <div className="absolute bottom-24 right-0 z-30">
                <div className="bg-green-100 backdrop-blur-lg px-6 py-3 rounded-2xl shadow-xl border border-green-200">
                  <span className="text-green-700 font-black text-xl">
                    DONE
                  </span>
                </div>
              </div>

              {/* Floating Avatar Group */}
              <div className="absolute -bottom-10 left-10 flex -space-x-5 z-30">

                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt=""
                  className="w-24 h-24 rounded-full border-[5px] border-white shadow-xl"
                />

                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                  className="w-24 h-24 rounded-full border-[5px] border-white shadow-xl"
                />

                <img
                  src="https://randomuser.me/api/portraits/men/52.jpg"
                  alt=""
                  className="w-24 h-24 rounded-full border-[5px] border-white shadow-xl"
                />

              </div>

              {/* Floating Card */}
              <div className="absolute top-8 -right-10 bg-white rounded-2xl shadow-2xl p-5 z-20 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <p className="font-semibold text-gray-700">
                    Campaign Approved
                  </p>
                </div>
              </div>

              {/* Floating Analytics Card */}
              <div className="absolute top-20 -left-10 bg-white rounded-2xl shadow-2xl p-5 z-20 hidden lg:block">
                <h3 className="font-bold text-gray-700">
                  Team Progress
                </h3>

                <div className="w-40 h-3 bg-gray-200 rounded-full mt-3">
                  <div className="w-[80%] h-full bg-blue-600 rounded-full"></div>
                </div>

                <p className="mt-2 text-blue-600 font-bold">
                  80% Complete
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;