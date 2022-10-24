import React from "react";
import SelectOption from "./SelectOption";
import PopupBtn from "../PopupBtn";
import CreateNewFolder from "./CreateNewFolder";
import FolderColor from "./FolderColor";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, editBookmark } from "../../../dataStore/feature/BookmarkSlicer";

function BookmarkPopupContent({ onClose, dua }) {
  const [selected, setSelected] = React.useState(null);
  const [newBookmarkName, setNewBookmarkName] = React.useState("");
  const [color, setColor] = React.useState("text-blue-400");
  const [error, setError] = React.useState("");
  const bookmarks = useSelector((state) => state.bookmarks);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (selected) {
      dispatch(
        editBookmark({
          ...selected,
          duas: [...selected.duas, dua],
        })
      );
      onClose();
    } else if (newBookmarkName && color) {
      dispatch(
        addBookmark({
          name: newBookmarkName,
          color: color,
          duas: [dua],
        })
      );
      onClose();
    } else {
      setError("Please select a folder or create a new one");
    }
  };

  return (
    <div className="modal-body relative ">
      <div className="mt-4 mb-4 flex justify-center items-start">
        <div style={{ width: "87%" }}>
          <SelectOption plans={bookmarks} selected={selected} setSelected={setSelected} title={"Folder Name"} />
          <CreateNewFolder value={newBookmarkName} setFolderName={setNewBookmarkName} setSelected={setSelected} />
          <FolderColor color={color} setColor={setColor} />
          <PopupBtn handleSubmit={handleSubmit} onClose={onClose} />
        </div>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </div>
  );
}

export default BookmarkPopupContent;
