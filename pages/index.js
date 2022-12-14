import { useEffect } from "react";
import DuaCatApi from "../dataStore/api/DuaCatApi";
import DuaDailyApi from "../dataStore/api/DuaDailyApi";
import Master from "../components/Layout/Master";
import MidCat from "../components/Home/MidCat";
import CatList from "../components/Home/CatList";
import { useSelector } from "react-redux";

const Index = () => {
  useEffect(() => {
    DuaCatApi.getCategory();
  }, []);

  useEffect(() => {
    DuaDailyApi.getDailyDua("en");
  }, []);

  const language = useSelector((state) => state.settings.language);

  return (
    <Master title={language === "en" ? "Homepage" : "হোমপেজ"} subTitle={"welcome to our website"}>
      <div className="scrl h-[calc(100vh_-_80px)] md:pt-24 lg:pt-24">
        <MidCat />
        <CatList />
      </div>
    </Master>
  );
};

export default Index;
