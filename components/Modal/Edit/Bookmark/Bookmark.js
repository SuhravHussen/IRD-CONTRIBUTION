import React, { useEffect } from "react";
import FolderName from "../FolderName";
import EditPopup from "../EditPopup";
import FolderColor from "../../BookmarkPopup/FolderColor";
import PopupBtn from "../../PopupBtn";
import CreateNewFolder from "../../BookmarkPopup/CreateNewFolder";
import { useDispatch } from "react-redux";
import { editBookmark } from "../../../../dataStore/feature/BookmarkSlicer";

function Bookmark({ onClose, bookmark }) {
  const [folderName, setFolderName] = React.useState(bookmark.name);
  const [color, setColor] = React.useState(bookmark.color);
  const [error, setError] = React.useState(" ");
  const dispatch = useDispatch();

  useEffect(() => {
    setColor(bookmark.color);
    setFolderName(bookmark.name);
  }, []);

  const handleSubmit = () => {
    setError("");
    if (bookmark.name !== folderName || bookmark.color !== color) {
      dispatch(
        editBookmark({
          ...bookmark,
          name: folderName,
          color: color,
        })
      );
      onClose();
    } else {
      setError("Please change folder name or color");
    }
  };
  return (
    <EditPopup>
      <CreateNewFolder value={folderName} setFolderName={setFolderName} title="Change folder name" />
      <FolderColor color={color} setColor={setColor} />
      <PopupBtn handleSubmit={handleSubmit} onClose={onClose} />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </EditPopup>
  );
}

export default Bookmark;
