import React, { useState } from "react";
import { useRef, useEffect } from "react";
import "./style.css";
import Picker from "emoji-picker-react";

export default function CreatePostPopup({
  background,
  setBackground,
  onClose,
}) {
  const [text, setText] = useState("");
  const [picker, setPicker] = useState(false);
  const [showBgs, setShowBgs] = useState(false);

  const textRef = useRef(null);
  const bgRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState();

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleEmoji = ({ emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };

  const postBackgrounds = [
    "../../../images/postbackgrounds/1.jpg",
    "../../../images/postbackgrounds/2.jpg",
    "../../../images/postbackgrounds/3.jpg",
    "../../../images/postbackgrounds/4.jpg",
    "../../../images/postbackgrounds/5.jpg",
    "../../../images/postbackgrounds/6.jpg",
    "../../../images/postbackgrounds/7.jpg",
    "../../../images/postbackgrounds/8.jpg",
    "../../../images/postbackgrounds/9.jpg",
  ];

  const backgroundHandler = (i) => {
    bgRef.current.style.backgroundImage = `url(${postBackgrounds[i]})`;
    setBackground(postBackgrounds[i]);
    bgRef.current.classList.add("bgHandler");
  };

  return (
    <div className="blur">
      <div className="postBox">
        <div className="box_header">
          <div className="small_circle">
            <i className="exit_icon"></i>
          </div>
          <span>Any Question?</span>
        </div>

        <div className="flex_center" ref={bgRef}>
          <textarea
            ref={textRef}
            maxLength="100"
            value={text}
            placeholder={`Type here....`}
            className="post_input"
            onChange={(e) => setText(e.target.value)}
            setBackground={setBackground}
            background={background}
          ></textarea>
        </div>

        <div className="post_emojis_wrap">
          {picker && (
            <div className="comment_emoji_picker rlmove">
              <Picker onEmojiClick={handleEmoji} />
            </div>
          )}
          <img
            src="../../../icons/colorful.png"
            alt=""
            onClick={() => {
              setShowBgs((prev) => !prev);
            }}
          />
          {showBgs && (
            <div className="post_backgrounds">
              <div className="no_bg"></div>
              {postBackgrounds.map((bg, i) => (
                <img
                  src={bg}
                  key={i}
                  alt=""
                  onClick={() => {
                    backgroundHandler(i);
                  }}
                />
              ))}
            </div>
          )}
          <i
            className="emoji_icon_large"
            onClick={() => {
              setPicker((prev) => !prev);
            }}
          ></i>
        </div>
        <button className="post_submit">POST</button>
      </div>
    </div>
  );
}
