import React, { useEffect } from "react";
import RuqyahCatApi from "../../dataStore/api/RuqyahCatApi";
import Master from "../../components/Layout/Master";

import Category from "../../components/Ruqyah/Category/Category";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("../../components/Ruqyah/Slider/Slider"), {
  ssr: false,
});

const MyApp = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_100px)] xs:pt-12 sm:pt-8 md:pt-24 lg:pt-24">
        <Slider />
        <Category />
      </div>
    </Master>
  );
};

export default MyApp;
