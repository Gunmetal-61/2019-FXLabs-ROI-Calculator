import React, { Component } from 'react';
import update from 'react-addons-update';

import './App.css';
import {
  Button,
  Layout,
  Row,
  Col,
  InputNumber,
  Table,
  Menu
} from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Column } = Table;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AB: 2000000,
      NA: 10,
      EA: 150,
      SV: 2000,
      
      AP: 1000,
      LC: 2000000,
      BP: 10,
      DT: 2,
      HW: 50,

      outputData: [
        {
          key: '1',
          program: 'APISec™',
          annualCost: 0,
          vulnCount: 0,
          ROI: 0
        },
        {
          key: '2',
          program: 'Bounty Program',
          annualCost: 0,
          vulnCount: 0,
          ROI: 0
        },
        {
          key: '3',
          program: 'Breach Cost',
          annualCost: 0,
          vulnCount: 0,
          ROI: 0
        },
        {
          key: '4',
          program: 'In-House Testing',
          annualCost: 0,
          vulnCount: "-",
          ROI: "-"
        },
      ]
    }

    this.changeNA = this.changeNA.bind(this);
    this.changeSV = this.changeSV.bind(this);
    this.changeHW = this.changeHW.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    console.log(50);
    this.handleInputChange();
  }

  changeNA(value) {
    this.setState({
      NA: value
    },
    () => {
      this.handleInputChange();
    });
  }

  changeSV(value) {
    this.setState({
      SV: value
    },
    () => {
      this.handleInputChange();
    });
  }

  changeHW(value) {
    this.setState({
      HW: value
    },
    () => {
      this.handleInputChange();
    });
  }

  toPercentString(value) {
    return ((Math.round(value * 100) / 100).toFixed(2)).toString() + "%";
  }

  toDollarString(value) {
    return "$" + this.toCommaString(value);
  }

  toCommaString(value) {
    let temp = Math.round(value).toString();
    let result = "";
    let j = 0;
    for (let i = temp.length - 1; i >= 0; i--) {
      result = temp[i] + result;
      j++;

      if (j == 3 && i != 0) {
        result = ',' + result;
        j = 0;
      }
    }

    return result;
  }

  handleInputChange() {
      var TSV = this.state.NA * this.state.SV;
      var SEN = this.state.NA * this.state.SV * this.state.DT / 2000;
      
      // var TAC_apiSec = 2500 * 12 + ((this.state.NA - 5) * 6000);
      var TAC_apiSec = 60000;
      var TAC_bounty = TSV * 0.01 * this.state.AP;
      var TAC_breach = this.state.NA * this.state.BP / 100 * this.state.LC;
      var TAC_inHouse = SEN * this.state.HW * 12 * 168;

      var VD_apiSec = 80 * this.state.NA;
      var VD_bounty = TSV * 0.01;
      var VD_breach = this.state.NA * this.state.BP / 100;

      var ROI_apiSec = TAC_apiSec / VD_apiSec;
      var ROI_bounty = TAC_bounty / VD_bounty;
      var ROI_breach = TAC_breach / VD_breach;

      const newData = update(this.state.outputData, {
        0: {
              annualCost: {$set: this.toDollarString(TAC_apiSec)},
              vulnCount: {$set: this.toCommaString(VD_apiSec)},
              ROI: {$set: this.toDollarString(ROI_apiSec)}
            },

        1: {
              annualCost: {$set: this.toDollarString(TAC_bounty)},
              vulnCount: {$set: this.toCommaString(VD_bounty)},
              ROI: {$set: this.toDollarString(ROI_bounty)}
            },

        2: {
              annualCost: {$set: this.toDollarString(TAC_breach)},
              vulnCount: {$set: this.toCommaString(VD_breach)},
              ROI: {$set: this.toDollarString(ROI_breach)}
            },

        3: {
              annualCost: {$set: this.toDollarString(TAC_inHouse)},
            }
      });

    this.setState((state, props) => ({
      outputData: newData
    }));
  }
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <p>Call Us Today (650) 918-0747 | founders@fxlabs.io</p>
            <img src="logo.png" alt="FX Labs" height="58" width="65"></img>
            <Menu mode="horizontal" defaultSelectedKeys={['roiCalc']}>
              <Menu.Item key="home">
                <a href="https://fxlabs.io/" target="_blank" rel="noopener noreferrer">
                  Home
                </a>
              </Menu.Item>
              <Menu.Item key="roiCalc">
                <a href="https://fxlabs.io/" target="_blank" rel="noopener noreferrer">
                  ROI Calculator
                </a>
              </Menu.Item>
              <Menu.Item key="useCases">
                <a href="https://fxlabs.io/use-cases/" target="_blank" rel="noopener noreferrer">
                  Use Cases
                </a>
              </Menu.Item>
              <Menu.Item key="company">
                <a href="https://fxlabs.io/company/" target="_blank" rel="noopener noreferrer">
                  Company
                </a>
              </Menu.Item>
              <Menu.Item key="contact">
                <a href="https://fxlabs.io/contact/" target="_blank" rel="noopener noreferrer">
                  Contact
                </a>
              </Menu.Item>
              <Menu.Item key="login">
                <a href="https://cloud.fxlabs.io/access.html" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Menu.Item>
              <Menu.Item key="signup">
                <a href="https://fxlabs.io/fx-cloud-sign-up/" target="_blank" rel="noopener noreferrer">
                  Sign Up
                </a>
              </Menu.Item>
            </Menu>
        
            
          </Header>


          <Content>
            <Row>
              <Col>
                <h1>Annual Costs Calculator</h1>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <h1>Enter Your Costs</h1>
              </Col>
              <Col span={8}>
                <h3>Number of APIs You Have</h3>
                <InputNumber
                  name="numberAPIs"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\?|(,*)/g, '')}
                  value={this.state.NA}
                  onChange={this.changeNA}
                >
                </InputNumber>
              </Col>
              <Col span={8}>            
                <h3>Unique Security Validations Per API</h3>
                <InputNumber
                  name="uniqueSecValid"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\?|(,*)/g, '')}
                  value={this.state.SV}
                  onChange={this.changeSV}
                >
                </InputNumber>
              </Col>
              <Col span={8}>
                <h3>Hourly Wage Per Engineer</h3>
                <InputNumber
                  name="hourlyWage"
                  precision={2}
                  formatter={value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  value={this.state.HW}
                  onChange={this.changeHW}
                >
                </InputNumber>
              </Col>
            </Row>

            <Row>
              <Col>
                <h1>Results</h1>
              </Col>
              <Col>
                <Table dataSource={this.state.outputData} pagination={false}>
                  <Column title="Programs" dataIndex="program" key="program" />
                  <Column title="Total Annual Cost" dataIndex="annualCost" key="annualCost" />
                  <Column title="Vulnerabilities Detected" dataIndex="vulnCount" key="vulnCount" />
                  <Column title="ROI (Cost Per Vulnerability)" dataIndex="ROI" key="ROI" />
                </Table>
              </Col>
            </Row>
          </Content>


          <Footer>
            <div id="footer-top">
              <p>845 Market St. – Suite 450</p>
              <p>San Francisco, CA 94103</p>
              <p>Phone: (650) 918-­0747</p>
              <p>Email: founders@fxlabs.io</p>
              <p>Web: fxlabs.io</p>
            </div>
            <div id="footer-bottom">
              <p>Copyright 2018 - FX Labs, Inc.</p>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;