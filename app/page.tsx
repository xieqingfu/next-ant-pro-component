"use client";

import React from "react";
import Link from "next/link";
import { SmileFilled } from "@ant-design/icons";
import {
  ConfigProvider,
} from "antd";
import theme from "./themeConfig";
import CreatePost from "./components/CreatePost";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div style={{ padding: 100, height: "100vh" }}>
      <div className="text-center mb-5">
        <SmileFilled style={{ fontSize: 48 }} />
        <p className="mb-0 mt-3 text-disabled">Welcome to the world !</p>
      </div>
      <CreatePost />
    </div>
  </ConfigProvider>
);

export default HomePage;
