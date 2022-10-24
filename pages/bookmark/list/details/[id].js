import Master from "../../../../components/Layout/Master";
import Card from "../../../../components/Bookmark/Details/Card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const MyApp = () => {
  const id = useRouter().query.id;
  const bookmarks = useSelector((state) => state.bookmarks);
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);
  const { duas } = bookmark;
  return (
    <Master title={"Bookmark Page"}>
      <div
        className="scrl h-[calc(100vh_-_100px)] 
      xs:pb-10
      sm:pb-10
      md:pt-24 md:pb-5
      lg:pt-24 lg:pb-5
      xl:pb-16
      2xl:pb-16
      3xl:pb-16">
        {duas && duas.map((dua, i) => <Card dua={dua} />)}
      </div>
    </Master>
  );
};

export default MyApp;
