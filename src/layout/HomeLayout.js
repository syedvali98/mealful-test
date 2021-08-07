import { Layout } from "antd";
import React from "react";
import HomeFooter from "../components/HomeFooter";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

export default function HomeLayout() {
  const { Header, Footer, Content } = Layout;

  return (
    <div>
      <Layout>
        <Header style={{ background: "white" }}>
          <Navbar />
        </Header>
        <Content style={{ background: "white" }}>
          <Home />
        </Content>
        <Footer style={{ background: "white" }}>
          <HomeFooter />
        </Footer>
      </Layout>
    </div>
  );
}
