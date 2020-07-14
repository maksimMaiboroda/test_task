import React from "react";

import { Layout } from "antd";

import classes from "./styled.module.css";
import ContentContainer from "../Content/ContentContainer";

const { Header, Content } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className={classes.minHeight}>
        <div className={classes.headerWrapper}>
          <Header className={classes.header}></Header>
        </div>
        <Content>
          <ContentContainer />
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
