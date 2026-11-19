import React, { useState } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

export default function MainLayOut() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Outlet context={{ search }} />
      <Footer />
    </>
  );
}
