import { useState } from "react";
import PlayList from "../UI/PlayList";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import SoundBars from "./SoundBars";

const Slider = () => {
  const [soundBarActive, setSoundBarActive] = useState(false);

  const [audios] = useState([
    {
      title: "1. Introduction to ruqyah",
      audio: "https://server8.mp3quran.net/ayyub/001.mp3",
    },
    {
      title: "2. Instant Ruqyah",
      audio: "https://server8.mp3quran.net/ayyub/004.mp3",
    },
    {
      title: "3. Ruqyah for Jinn Possession",
      audio: "https://server8.mp3quran.net/ayyub/003.mp3",
    },
    {
      title: "4. Ruqyah for Black Magic",
      audio: "https://server8.mp3quran.net/ayyub/004.mp3",
    },
  ]);
  const [currentAudio, setCurrentAudio] = useState(0);

  return (
    <div
      className="h-72 bg-blue-500  bg-repeat-x mb-4 overflow-hidden flex relative items-center xs:h-52 
      sm:mt-5">
      <div
        className="text-black absolute h-full p-6 pl-8  w-full xs:pl-6 
      sm:pl-5">
        <div className="flex flex-row justify-start items-start content-start ">
          <div className="w-7/12 flex flex-col justify-between h-64 items-start xs:h-44 xs:w-full">
            <p className="font-inter font-medium xs:text-sm xs:leading-4">{audios[currentAudio].title}</p>
            <SoundBars isSoundBarActive={soundBarActive} />
            <div
              className="w-full pr-16 xs:pr-2 
                sm:pr-10">
              <AudioPlayer
                // ref={ref}
                customAdditionalControls={[]}
                showSkipControls
                showJumpControls={false}
                showFilledVolume
                showFilledProgress
                src={audios[currentAudio].audio}
                autoPlay={false}
                onPlay={() => setSoundBarActive(true)}
                onPause={() => setSoundBarActive(false)}
                onClickNext={() =>
                  setCurrentAudio((prv) => {
                    setSoundBarActive(true);
                    if (prv < audios.length - 1) {
                      return prv + 1;
                    } else {
                      return 0;
                    }
                  })
                }
                onClickPrevious={() =>
                  setCurrentAudio((prv) => {
                    setSoundBarActive(true);
                    if (prv > 0) {
                      return prv - 1;
                    } else {
                      return audios.length - 1;
                    }
                  })
                }
              />
            </div>
          </div>
          <div className="w-5/12 xs:hidden">
            <div className="flex flex-col w-full">
              <p className="flex flex-row">Playlist</p>
              <hr className="bg-hr mt-2 opacity-50" />
              <div className="flex flex-col items-start mt-5 gap-y-4">
                {audios.map((audio, index) => {
                  return (
                    <PlayList
                      key={index}
                      id={index}
                      title={audio.title}
                      active={currentAudio === index}
                      handlePlayList={() => setCurrentAudio(index)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
