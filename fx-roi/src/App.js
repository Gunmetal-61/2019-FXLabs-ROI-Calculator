import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Layout,
  Row,
  Col
} from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Row>
            <Col>
              test
            </Col>
            <Col>
              test
            </Col>
            <Col>
              test
            </Col>
          </Row>
        </Header>
        <Content>

        </Content>
        <Footer>

        </Footer>
      </Layout>
      
    </div>
  );
}

export default App;
