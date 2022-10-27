import React from "react";
import ReactPlayer from "react-player/youtube";

function VideoItem({ videoItem }) {
  if (!videoItem) {
    return <div>Loading...</div>;
  }

  let randomNum = Math.floor(Math.random() * 11);
  const videoSrc = `https://www.youtube.com/embed/${videoItem.data.items[randomNum].id.videoId}`;

  const playing = true;

  const mainImg =
    "https://images.unsplash.com/photo-1530790086183-21177ac45b3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";

  return (
    <>
      <div
        className="h-full bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${mainImg})`,
        }}
      >
        <ReactPlayer
          url={videoSrc}
          config={{
            youtube: {
              playerVars: {
                color: "white",
                modestbranding: true,
                showinfo: 1,
              },
            },
          }}
          volume={0.5}
          light={false}
          height="100vh"
          width="100wh"
          muted={false}
          style={{ opacity: "0" }}
          playing={playing}
        />
      </div>
    </>
  );
}

export default VideoItem;
