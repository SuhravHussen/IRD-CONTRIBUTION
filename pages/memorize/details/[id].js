import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Master from "../../../components/Layout/Master";
import MemorizeDetails from "../../../components/Memorize/Details/DetailsCard";

const MyApp = () => {
  const id = useRouter().query.id;
  const { plans } = useSelector((state) => state.memorize);
  const currentPlan = plans.find((plan) => plan.id === id);
  const { dua } = currentPlan || {
    id: id,
  };

  return (
    <Master>
      <div
        className="scrl h-[calc(100vh_-_100px)] 
      xs:pb-10
      sm:pb-10
      md:pt-24 md:pb-5
      lg:pt-24 lg:pb-5
      xl:pb-16
      2xl:pb-16
      3xl:pb-16">
        {dua && dua.map((details) => <MemorizeDetails planId={currentPlan.id} details={details} />)}
      </div>
    </Master>
  );
};

export default MyApp;
