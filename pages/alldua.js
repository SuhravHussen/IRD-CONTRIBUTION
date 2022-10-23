import Master from "../components/Layout/Master";
import Rodal from "rodal";
import DuaPopup from "../components/Modal/DuaPopup/DuaPopup";
import "rodal/lib/rodal.css";
import React, { useEffect, useState } from "react";
import NumCard from "../components/Utils/NumCard";
import AllDuaApi from "../dataStore/api/GetAllDua";
import { useSelector } from "react-redux";
import AllDuasContainer from "../components/AllDuas/ALLDuasContainer";
import SortedDuas from "../components/AllDuas/SortedDuas";
import AllDuaSkeleton from "../components/AllDuas/AllDuaSkeleton";

const AllDua = () => {
  const [modalShow, setModalShow] = useState(false);

  const { data, loading } = useSelector((state) => state.allDuas);
  const { language } = useSelector((state) => state.settings);
  const duaName = language === "en" ? "dua_name_en" : "dua_name_bn";

  useEffect(() => {
    AllDuaApi.getAllDua(duaName);
  }, [duaName]);

  return (
    <Master title={"All Dua"}>
      <AllDuasContainer>
        {loading && !data.error && Array.from({ length: 3 }).map((_, i) => <AllDuaSkeleton key={i} />)}
        {Object.keys(data.result) &&
          !loading &&
          Object.keys(data.result).map((key) => (
            <SortedDuas key={key} duaName={duaName} letter={key} duas={data.result[key]} setModalShow={setModalShow} />
          ))}
        {data.error && <p className="text-center text-red-500 text-2xl">Sorry! Something went wrong</p>}
        <Rodal
          showCloseButton={false}
          width={700}
          height={500}
          customStyles={{ backgroundColor: "transparent", borderRadious: "none", boxShadow: "none" }}
          visible={modalShow}
          onClose={() => setModalShow(false)}>
          <DuaPopup alphabets={Object.keys(data?.result)} onClose={() => setModalShow(false)} />
        </Rodal>
      </AllDuasContainer>
    </Master>
  );
};

export default AllDua;
