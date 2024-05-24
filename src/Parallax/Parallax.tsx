import React from "react";
import "./Parallax.css";

const Parallax = () => {
  const style: React.CSSProperties = {
    backgroundImage:
      'url("https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?w=740&t=st=1716519704~exp=1716520304~hmac=84e56e01b844480aa9279540c53cce0dcd7aba3573c6494724afe89b8156cc83")',
    // backgroundAttachment: "fixed",
  };
  return (
    <>
      <div className="bg-slate-100 h-[100vh] flex flex-col justify-center items-center text-3xl">
        Easy Peasy tutorial of{" "}
        <span className="text-orange-500 pt-5">Parallax Scrolling Effect</span>
      </div>

      {/* this div is for scrolling effect in raw CSS*/}
      <div className="parallax"></div>

      <div className="bg-slate-100 h-[100vh] flex flex-col justify-center items-center text-3xl">
        See how easy it is to add
        <span className="text-orange-500 pt-5">Parallax Scrolling Effect!</span>
      </div>

      {/* this div is for scrolling effect via TAILWINDCSS in JSX*/}
      {/* <div className="bg-fixed" style="background-image: url(...)"></div> */}
      
      {/* this div is for scrolling effect via TAILWINDCSS in TSX*/}
      <div
        className="bg-fixed h-[50vh] bg-center bg-no-repeat bg-cover"
        style={style}
      ></div>

      <div className="bg-slate-100 h-[100vh] flex flex-col justify-center items-center text-3xl">
        Using TAILWINDCSS for
        <span className="text-orange-500 pt-5">Parallax Scrolling Effect!</span>
      </div>
    </>
  );
};

export default Parallax;