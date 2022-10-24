import { useSelector } from "react-redux";
import Card from "../../components/Bookmark/Card";
import Master from "../../components/Layout/Master";

const MyApp = () => {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <Master title={"Bookmark Page"}>
      <div className="scrl h-[calc(100vh-100px)]">
        <h5 className="font-medium text-lg text-[#373737] flex justify-start mb-4  ">BOOKMARKS:</h5>
        <div
          className="grid mb-6 gap-x-6 gap-y-4 
        xs:gap-y-3 xs:pb-8
        sm:grid-cols-2 sm:gap-x-4 sm:pb-10
        md:grid-cols-2 md:gap-x-4 md:pb-5
        lg:grid-cols-3 lg:pb-5
        xl:grid-cols-3 xl:pb-7
        2xl:grid-cols-3 2xl:pb-8
        3xl:grid-cols-3 3xl:pb-8">
          {bookmarks && bookmarks.map((bookmark) => <Card key={bookmark.id} bookmark={bookmark} />)}
        </div>
      </div>
    </Master>
  );
};

export default MyApp;
