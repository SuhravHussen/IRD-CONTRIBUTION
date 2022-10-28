import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import DuaBottomBar from "../../Details/DuaCard/DuaBottomBar";

const RuqyahDetailsCard = ({ details }) => {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && router.query.ruqya && router.query.ruqya === details.id.toString()) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [router.query.ruqya, details.id]);

  return (
    <div ref={ref} id={details?.id} className="bg-red-100 rounded-2lg mb-5 dark:bg-[#223449]">
      <div className="p-6">
        <h2 className="font-semibold text-xl p-3">{details?.topic_name}</h2>
        <hr />
        <div className="flex flex-col justify-start items-start">
          {/* Body */}
          <p className=" my-5 text-title text-justify font-inter font-normal p-3" dangerouslySetInnerHTML={{ __html: details?.ruqya_details }}></p>
        </div>
      </div>
      <DuaBottomBar />
    </div>
  );
};

export default RuqyahDetailsCard;
