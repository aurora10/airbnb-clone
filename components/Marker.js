import React, { useState } from "react";
import { GlobeAltIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Marker({ searchResults }) {
  return (
    <div className="text-red-500 cursor-pointer text-2xl animate-bounce">
      <MapPinIcon className="w-7 h-10 text-red-700" />
    </div>
  );
}

export default Marker;
