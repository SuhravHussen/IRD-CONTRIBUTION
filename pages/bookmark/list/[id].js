import Master from "../../../components/Layout/Master";
import Card from "../../../components/Bookmark/Inside/Card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const BookmarkList = () => {
  const id = useRouter().query.id;
  const bookmarks = useSelector((state) => state.bookmarks);
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);

  const { language } = useSelector((state) => state.settings);

  const duaName = language === "en" ? "dua_name_en" : "dua_name_bn";

  return (
    <Master title={"Bookmark Page"}>
      <div
        className="grid gap-4 scrl h-[calc(100vh-100px)] pb-16
      sm:grid-cols-2
      md:grid-cols-2 md:pt-24
      lg:pt-24 lg:grid-cols-3
      xl:grid-cols-3
      2xl:grid-cols-3
      3xl:grid-cols-3">
        {bookmark?.duas?.map((dua, i) => (
          <Card
            bookmarkId={bookmark?.id}
            duaNumber={language === "en" ? i + 1 : (i + 1).toLocaleString("bn")}
            key={dua.id}
            title={dua[duaName]}
            dua={dua}
          />
        ))}
      </div>
    </Master>
  );
};

export default BookmarkList;
