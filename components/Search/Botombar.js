import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import copyText from "../../helpers/copyText";

const Botombar = ({ textToCopy, element, dua }) => {
  const { theme } = useTheme();
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    copyText(element, textToCopy, () => {
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 1000);
    });
  };

  return (
    <div className="">
      <hr className="bg-hr dark:hidden" />
      <div className="flex flex-row justify-between px-6">
        <div className=" py-4">
          <img src="/assets/audiobtn.svg" alt="" />
        </div>
        <div className="flex flex-row py-6 gap-x-8 relative">
          {showCopied && (
            <div className="absolute  bg-stone-800 rounded-md p-2 bottom-16 -left-16 animate-bounce transition duration-1000 ease-in-out ">
              <p className="text-white">Copied</p>
            </div>
          )}
          {theme === "dark" ? (
            <img className=" cursor-pointer" src="/assets/others/dark/copy.svg" alt="" onClick={handleCopy} />
          ) : (
            <img src="/assets/others/copy.svg" className=" cursor-pointer" alt="" onClick={handleCopy} />
          )}
          <Link href={`/dua/${dua.cat_id}/${dua.subcat_id}#${dua.id}`}>
            {theme === "dark" ? <img src="/assets/others/dark/direct.svg" alt="" /> : <img src="/assets/others/direct.svg" alt="" />}
          </Link>
          {theme === "dark" ? <img src="/assets/others/dark/share.svg" alt="" /> : <img src="/assets/others/share.svg" alt="" />}
          {theme === "dark" ? <img src="/assets/others/dark/report.svg" alt="" /> : <img src="/assets/others/report.svg" alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Botombar;
