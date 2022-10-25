import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Pagination from "react-responsive-pagination";
import { useSelector } from "react-redux";
import Master from "../components/Layout/Master";
import SearchList from "../components/Search/SearchList";
import SearchApi from "../dataStore/api/SearchApi";
import Skeletons from "../components/Search/Skeletons/Skeletons";

const MyApp = () => {
  const query = useRouter().query.query;
  const language = useSelector((state) => state.settings.language);
  const { data, error, loading } = useSelector((state) => state.duaSearch);
  const [currentDuas, setCurrentDuas] = useState([]);
  const [page, setPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    SearchApi.duaSearch(query, language);
  }, [query, language]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentDuas(data?.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (page) => {
    const newOffset = (page * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    setPage(page);
    const topElement = document.getElementById(currentDuas[0].id);
    topElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Master>
      <div className=" h-[calc(100vh_-_10px)]  sm-min:h-[calc(100vh_-_100px)]  scrl">
        {!loading && !error && (
          <>
            <SearchList duas={currentDuas} query={query} />
            <Pagination total={data.length} current={page} onPageChange={(page) => handlePageClick(page)} narrowStrategy="dropNav" />
          </>
        )}
        {loading && !error && <Skeletons />}
        {!loading && !error && data.length < 1 && (
          <div className="text-center h-full flex items-center justify-center text-2xl font-bold text-red-500">No Result Found</div>
        )}
        {!loading && error && (
          <div className="text-center h-full flex items-center justify-center text-2xl font-bold text-red-500">Something went wrong</div>
        )}
      </div>
    </Master>
  );
};

export default MyApp;
