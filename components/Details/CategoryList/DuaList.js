import DuaText from "../Ui/DuaText";
import { useSelector } from "react-redux";

export default function DuaList(props) {
  const selectedDua = useSelector((state) => state.subCat.subCatId);
  const language = useSelector((state) => state.settings.language) || "en";

  let dua = selectedDua && selectedDua[`${props.subCatId}`]?.result?.filter((item) => item.dua_name_en != null);

  return (
    <div className="mt-2 cursor-pointer">
      {selectedDua &&
        dua?.map((item) => (
          <DuaText catId={item.cat_id} subCatId={item.subcat_id} duaId={item.dua_id} name={language === "en" ? item.dua_name_en : item.dua_name_bn} />
        ))}
    </div>
  );
}
