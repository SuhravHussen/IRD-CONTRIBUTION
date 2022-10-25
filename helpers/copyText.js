const copyText = (element, copyText, callback) => {
  callback(true);
  element.current.select();
  element.current.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText);
};

export default copyText;
