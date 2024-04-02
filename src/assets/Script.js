"use client";
import React from "react";
import Script from "next/script";

const ScriptFile = () => {
  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-PTTSLDRKF5'
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-PTTSLDRKF5");
        }}
      />
    </>
  );
};

export default ScriptFile;
