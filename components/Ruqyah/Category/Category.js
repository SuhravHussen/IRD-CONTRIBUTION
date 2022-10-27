import Card from "../../Utils/Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import RuqCatApi from "../../../dataStore/api/RuqyahCatApi";

const Category = () => {
  const data = useSelector((state) => state.ruqyahCat.data);
  const lang = useSelector((state) => state.settings.language);
  useEffect(() => {
    RuqCatApi.getRuqyahCategory(lang);
  }, [lang]);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className="text-left font-medium xs-max:mt-4 ">Categories Of Ruqyah :</p>
      </div>
      <div
        className="grid grid-cols-2 xs-max:grid-cols-1 xs-max:mb-12
      sm:pb-28 sm:gap-x-6 lg-min:grid-cols-3 mt-2 gap-x-8 gap-y-3.5">
        {data && data?.map((item) => <Card link={"/ruqyah/details/" + item.cat_id} title={item.category_name} />)}
        <Card link={"/ruqyah/video"} title={"Ruqyah related Video"} />
      </div>
    </div>
  );
};

export default Category;
