import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Layout,
  Row,
  Col
} from "antd";

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Row>
            <h1>Annual Costs Calculator</h1>
              <Col>
                <h1>Enter Your Costs</h1>
                <h3>Number of APIs You Have</h3>
                <h3>Endpoints Per API</h3>
                <h3>Unique Security Validations Per API</h3>
                
              </Col>
              <Col>
                <h1>Comparison of Programs</h1>
                <h2>APISec™</h2>
                <h3>Select an FX Lab Product Plan:</h3>
                <h2>Bounty Program</h2>
                <h3>Average Payout Per Bug Found</h3>
                <h2>Breach Cost</h2>
                <h3>Cost of Fines</h3>
                <h3>Breach Probability (annually per API)</h3>
                <h2>In-house Cost</h2>
                <h3>Development Time Per Validation</h3>
                <h3>Security Engineers on Team</h3>
                <h3>Hourly Wage Per Engineer</h3>
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
      
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;