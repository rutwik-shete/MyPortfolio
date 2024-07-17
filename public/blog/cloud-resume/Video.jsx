import React from "react"

const Video = () => {
  return (
    <video
      style={{ margin: "2rem auto", display: "grid" }}
      autoPlay={true}
      loop={true}
      muted={true}
      src="https://user-images.githubusercontent.com/17233773/102701827-43971800-4229-11eb-89b7-95b2ec42760b.mov"
    ></video>
  )
}

export default Video
