import React from "react";
import Slider from "../components/Slider";
import ContentHeader from "../components/ContentHeader";
import PeopleCard from "../components/PeopleCard";
import CityCard from "../components/CityCard";

import people from "../assets/images/people.jpg";
import newyork from "../assets/images/newyork.jpg";
import map1 from "../assets/images/map.jpg";
import Contact from "../components/Contact";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="pt-10">
      <main>
        <section id="home "  >
          <Slider />
        </section>
        <section id="band" className="w-full min-h-screen flex items-center">
          <div className="lg:w-3/5 mx-auto flex flex-col gap-4 ">
            <ContentHeader title="THE BAND" text="We love music" />
            <div className="px-2">
              <p className="text-justify md:text-[15px] text-sm">
                We have created a fictional band website. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div className="flex items-center justify-around">
              <PeopleCard src={people} alt="human with camera" name="Name" />
              <PeopleCard src={people} alt="human with camera" name="Name" />
              <PeopleCard src={people} alt="human with camera" name="Name" />
            </div>
          </div>
        </section>
        <section
          id="tour"
          className="w-full min-h-[120vh] flex items-center py-10 bg-black text-white"
        >
          <div className="lg:w-3/5 mx-auto flex flex-col gap-6 ">
            <ContentHeader
              title="TOUR DATES"
              text="Remember to book your tickets!"
            />
            <div className="bg-white w-full text-black">
              <div className="p-3 border-b border-gray-500">
                <p className="text-gray-600">
                  September{" "}
                  <span className="bg-red-600 text-white px-2 py-1 mx-2">
                    Sold out
                  </span>
                </p>
              </div>
              <div className="p-3 border-b border-gray-500">
                <p className="text-gray-600">
                  September{" "}
                  <span className="bg-red-600 text-white px-2 py-1 mx-2">
                    Sold out
                  </span>
                </p>
              </div>
              <div className="flex justify-between  p-3 border-b border-gray-500">
                <p className="text-gray-600">September </p>{" "}
                <div className="rounded-full bg-black text-white w-6 flex items-center justify-center">
                  3
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
              <CityCard
                src={newyork}
                alt="city photo"
                city="New York"
                date="Fri 27 Nov 2016"
                about="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                text="Buy Tickets"
              />
              <CityCard
                src={newyork}
                alt="city photo"
                city="Paris"
                date="Fri 27 Nov 2016"
                about="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                text="Buy Tickets"
              />
              <CityCard
                src={newyork}
                alt="city photo"
                city="San Francisco"
                date="Fri 27 Nov 2016"
                about="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                text="Buy Tickets"
              />
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full min-h-[75vh] flex items-center bg-white"
        >
          <div className="lg:w-3/5 mx-auto flex flex-col gap-8 ">
            <ContentHeader title="CONTACT" text="Fan? Drop a note!" />
            <div className="flex sm:justify-between flex-col sm:flex-row items-center gap-4">
              <Contact />
              <Form />
            </div>
          </div>
        </section>
        <section>
          <img src={map1} alt="" />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
