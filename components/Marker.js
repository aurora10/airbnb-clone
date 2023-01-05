import React, { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
//import Popup from "../components/Popup";

function Marker(props) {
  return (
    <>
      <div className="ml-2 -mt-5">
        <a
          href="#"
          className="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300"
        >
          <div className="z-40 p-30 text-red-400">
            <div className="text-red-500 cursor-pointer text-2xl animate-bounce">
              <MapPinIcon className="w-7 h-10 text-red-700" />
            </div>
          </div>
          <span className="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
            {props.titles}
          </span>
        </a>
      </div>
    </>
  );
}

export default Marker;

// export async function getServerSideProps() {
//   const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       searchResults,
//     },
//   };
// }
