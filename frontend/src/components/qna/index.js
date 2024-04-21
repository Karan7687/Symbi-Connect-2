import React from "react";
import { useRef, useState } from "react";
import Header from "../header";
import { Menu } from "../../svg";
import AllMenu from "../header/AllMenu";
import CreatePost from "../createPost";
import { useSelector } from "react-redux";
import CreatePostPopup from "../createPostPopup";

export default function Qna() {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div>
      <CreatePostPopup />
      <Header />

      {/* <Menu /> */}
      <AllMenu />

      <CreatePost user={user} />
    </div>
  );
}
