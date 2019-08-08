import React, { Component } from 'react';
import update from 'immutability-helper';

import './App.css';
import {
  Button,
  Layout,
  Row,
  Col,
  InputNumber,
  Statistic,
  Table,
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
          annualCost: 120,
          annualBudget: 0,
          vulnCount: 0,
          ROI: 0
        },
        {
          key: '2',
          program: 'Bounty Program',
          annualCost: 0,
          annualBudget: 0,
          vulnCount: 0,
          ROI: 0
        },
        {
          key: '3',
          program: 'Breach Mitigation',
          annualCost: 0,
          annualBudget: 0,
          vulnCount: 0,
          ROI: 0
        },
        {
          key: '4',
          program: 'In-House Testing',
          annualCost: 0,
          annualBudget: 0,
          vulnCount: 0,
          ROI: 0
        },
      ]
    }

    this.changeAB = this.changeAB.bind(this);
    this.changeNA = this.changeNA.bind(this);
    this.changeEA = this.changeEA.bind(this);
    this.changeSV = this.changeSV.bind(this);
    this.changeAP = this.changeAP.bind(this);
    this.changeLC = this.changeLC.bind(this);
    this.changeBP = this.changeBP.bind(this);
    this.changeDT = this.changeDT.bind(this);
    this.changeHW = this.changeHW.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.handleInputChange();
  }

  changeAB(value) {
    this.setState({
      AB: value
    });

    this.handleInputChange();
  }

  changeNA(value) {
    this.setState({
      NA: value
    });

    this.handleInputChange();
  }

  changeEA(value) {
    this.setState({
      EA: value
    });

    this.handleInputChange();
  }

  changeSV(value) {
    this.setState({
      SV: value
    });

    this.handleInputChange();
  }

  changeAP(value) {
    this.setState({
      AP: value
    });

    this.handleInputChange();
  }

  changeLC(value) {
    this.setState({
      LC: value
    });

    this.handleInputChange();
  }

  changeBP(value) {
    this.setState({
      BP: value
    });

    this.handleInputChange();
  }

  changeDT(value) {
    this.setState({
      DT: value
    });

    this.handleInputChange();
  }

  changeHW(value) {
    this.setState({
      HW: value
    });

    this.handleInputChange();
  }

  handleInputChange() {
      var TSV = this.state.NA * this.state.SV;
      var SEN = this.state.NA * this.state.SV * this.state.DT / 2000;

      var TAC_apiSec = 2500 * 12 + ((this.state.NA - 5) * 6000);
      var TAC_bounty = TSV * 0.01 * this.state.AP;
      var TAC_breach = this.state.NA * this.state.BP * this.state.LC;
      var TAC_inHouse = SEN * this.state.HW * 12 * 168;

      var PAB_apiSec = TAC_apiSec / this.state.AB;
      var PAB_bounty = TAC_bounty / this.state.AB;
      var PAB_breach = TAC_breach / this.state.AB;
      var PAB_inHouse = TAC_inHouse / this.state.AB;

      var VD_apiSec = 80 * this.state.NA;
      var VD_bounty = TSV * 0.01;
      var VD_breach = this.state.NA * this.state.BP;

      var ROI_apiSec = TAC_apiSec / VD_apiSec;
      var ROI_bounty = TAC_bounty / VD_bounty;
      var ROI_breach = TAC_breach / VD_breach;

      // const 
      // var newData = update()

      console.log(this.state.outputData[0].annualCost);

    this.setState((state, props) => ({
      // this.state.outputData = 
      this.state.outputData[0].annualCost: TAC_apiSec,
      [this.state.outputData[1].annualCost]: TAC_bounty,
      [this.state.outputData[2].annualCost]: TAC_breach,
      [this.state.outputData[3].annualCost]: TAC_inHouse,

      [this.state.outputData[0].annualBudget]: PAB_apiSec,
      [this.state.outputData[1].annualBudget]: PAB_bounty,
      [this.state.outputData[2].annualBudget]: PAB_breach,
      [this.state.outputData[3].annualBudget]: PAB_inHouse,

      [this.state.outputData[0].vulnCount]: VD_apiSec,
      [this.state.outputData[1].vulnCount]: VD_bounty,
      [this.state.outputData[2].vulnCount]: VD_breach,

      [this.state.outputData[0].ROI]: ROI_apiSec,
      [this.state.outputData[1].ROI]: ROI_bounty,
      [this.state.outputData[2].ROI]: ROI_breach
    }));

    console.log(this.state);
  }
  
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            
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
              <Col span={6}>
                <h3>Your Annual Budget</h3>
                <InputNumber
                  name="annualBudget"
                  precision={2}
                  formatter={value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  value={this.state.AB}
                  onChange={this.changeAB}
                >
                </InputNumber>
              </Col>
              <Col span={6}>
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
              <Col span={6}>
                <h3>Endpoints Per API</h3>
                <InputNumber
                  name="endpointsPerAPI"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\?|(,*)/g, '')}
                  value={this.state.EA}
                  onChange={this.changeEA}
                >
                </InputNumber>
              </Col>
              <Col span={6}>            
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
            </Row>

            <Row>
              <Col>
                <h1>Comparison of Programs</h1>
              </Col>
            </Row>

            <Row>
              <Col span={6}>
                <h2>APISec™</h2>
                <h3>Select an FX Lab Product Plan:</h3>
                <InputNumber>
                </InputNumber>
              </Col>
              <Col span={6}>
                <h2>Bounty Program</h2>
                <h3>Average Payout Per Bug Found</h3>
                <InputNumber
                  name="avgBountyPayout"
                  precision={2}
                  formatter={value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$?|(,*)/g, '')}
                  value={this.state.AP}
                  onChange={this.changeAP}
                >
                </InputNumber>
              </Col>
              <Col span={6}>
                <h2>Breach Cost</h2>
                <h3>Legal Cost Per Breach</h3>
                <InputNumber
                  name="legalBreachFine"
                  precision={2}
                  formatter={value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$?|(,*)/g, '')}
                  value={this.state.LC}
                  onChange={this.changeLC}
                >
                </InputNumber>
                <h3>Breach Probability (Annually Per API)</h3>
                <InputNumber
                  name="breachProb"
                  precision={1}
                  formatter={value => `${value}%`}
                  parser={value => value.replace('%', '')}
                  value={this.state.BP}
                  onChange={this.changeBP}
                >
                </InputNumber>
              </Col>
              <Col span={6}>
                <h2>In-House Testing</h2>
                <h3>Development Time Per Validation</h3>
                <InputNumber
                  name="devTimePerValid"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\?|(,*)/g, '')}
                  value={this.state.DT}
                  onChange={this.changeDT}
                >
                </InputNumber>
                <h3>Hourly Wage Per Engineer</h3>
                <InputNumber
                  name="hourlyWage"
                  precision={2}
                  formatter={value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$?|(,*)/g, '')}
                  value={this.state.HW}
                  onChange={this.changeHW}
                >
                </InputNumber>
              </Col>
              <Col span={24}>
                <Button type="primary">Button</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <h1>Results</h1>
              </Col>
              <Col>
                <Table dataSource={this.state.outputData}>
                  <Column title="Programs" dataIndex="program" key="program" />
                  <Column title="Total Annual Cost" dataIndex="annualCost" key="annualCost" />
                  <Column title="% of Annual Budget" dataIndex="annualBudget" key="annualBudget" />
                  <Column title="Vulnerabilities Detected" dataIndex="vulnCount" key="vulnCount" />
                  <Column title="ROI (Cost Per Vulnerability)" dataIndex="ROI" key="ROI" />
                </Table>
              </Col>
            </Row>
          </Content>


          <Footer>

          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;