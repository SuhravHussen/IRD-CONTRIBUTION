import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { deleteBookmark } from "../../../dataStore/feature/BookmarkSlicer";
import DeletePopup from "../../Modal/DeletePopup/DeletePopup";

const SingleBotombar = ({ duaID, copyText, copyElement }) => {
  const [modalShow, setModalShow] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const { theme } = useTheme();

  const id = useRouter().query.id;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteBookmark({
        duaId: duaID,
        bookmarkId: id,
      })
    );
  };

  const handleCopy = () => {
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
    copyElement.current.select();
    copyElement.current.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText);
  };

  return (
    <div className="">
      <div className="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:"></div>
      <div className="flex flex-row justify-between px-6">
        <div className=" py-4">
          <img src="/assets/others/audiobtn.svg" alt="" />
        </div>
        <div className="flex flex-row py-6 gap-x-8 cursor-pointer relative">
          {showCopied && (
            <div className="absolute  bg-stone-800 rounded-md p-2 bottom-16 -left-16 animate-bounce transition duration-1000 ease-in-out cursor-pointer">
              <p className="text-white">Copied</p>
            </div>
          )}
          {theme === "dark" ? (
            <img src="/assets/others/dark/copy.svg" alt="" onClick={handleCopy} />
          ) : (
            <img src="/assets/others/copy.svg" alt="" onClick={handleCopy} />
          )}
          <button
            type="button"
            onClick={() => setModalShow(true)}
            className="text-black font-medium  leading-tight uppercase  transition duration-150 ease-in-out   text-lg">
            {theme === "dark" ? <img src="/assets/others/dark/deleteBtn.svg" alt="" /> : <img src="/assets/others/deleteBtn.svg" alt="" />}
          </button>
          {theme === "dark" ? <img src="/assets/others/dark/direct.svg" alt="" /> : <img src="/assets/others/direct.svg" alt="" />}
          {theme === "dark" ? <img src="/assets/others/dark/share.svg" alt="" /> : <img src="/assets/others/share.svg" alt="" />}
        </div>
      </div>
      <Rodal
        showCloseButton={false}
        width={500}
        height={300}
        customStyles={{ backgroundColor: "transparent", borderRadious: "none", boxShadow: "none" }}
        visible={modalShow}
        onClose={() => setModalShow(false)}>
        <DeletePopup title="Do you want to delete this dua from bookmark?" onClick={handleDelete} onClose={() => setModalShow(false)} />
      </Rodal>
    </div>
  );
};

export default SingleBotombar;
