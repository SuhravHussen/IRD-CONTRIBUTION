export default function PlayList(props) {
  return (
    <div
      onClick={props.handlePlayList}
      className="flex flex-row cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
      {props.active ? <img src="/assets/mediaplayer/playsec.svg" className="mr-4 " alt="" /> : ""}
      <p className={`${props.active ? "text-sm font-inter font-medium" : "text-sm font-inter hover:font-medium"} "`}>{props.title}</p>
    </div>
  );
}
