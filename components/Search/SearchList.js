import DuaCard from "./DuaCard";

const SearchList = ({ duas, query }) => {
  return (
    <div className="flex flex-col">
      {duas.map((item, i) => (
        <DuaCard key={item.id} dua={item} query={query} />
      ))}
    </div>
  );
};

export default SearchList;
