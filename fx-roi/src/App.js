import React, { Component } from 'react';
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

const output = [
  {
    key: '1',
    program: 'APISec™',
    annualCost: '',
    annualBudget: '',
    vulnCount: '',
    ROI: ''
  },
  {
    key: '2',
    program: 'Bounty Program',
    annualCost: '',
    annualBudget: '',
    vulnCount: '',
    ROI: ''
  },
  {
    key: '3',
    program: 'Breach Mitigation',
    annualCost: '',
    annualBudget: '',
    vulnCount: '',
    ROI: ''
  },
  {
    key: '4',
    program: 'In-House Testing',
    annualCost: '',
    annualBudget: '',
    vulnCount: '',
    ROI: ''
  },
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annualBudget: 2000000,
      numberAPIs: 10,
      endpointsPerAPI: 150,
      uniqueSecValid: 2000,

      avgBountyPayout: 1000,

      legalBreachFine: 2000000,
      breachProb: 10,

      devTimePerValid: 2,
      hourlyWage: 50,

      outputData: output
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target);
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
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
                  value={this.state.annualBudget}
                  onChange={this.handleInputChange}
                >
                </InputNumber>
              </Col>
              <Col span={6}>
                <h3>Number of APIs You Have</h3>
                <InputNumber
                  name="numberAPIs"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\?|(,*)/g, '')}
                  value={this.state.numberAPIs}
                  onChange={this.handleInputChange}
                >
                </InputNumber>
              </Col>
              <Col span={6}>
                <h3>Endpoints Per API</h3>
                <InputNumber
                  name="endpointsPerAPI"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\?|(,*)/g, '')}
                  value={this.state.endpointsPerAPI}
                  onChange={this.handleInputChange}
                >
                </InputNumber>
              </Col>
              <Col span={6}>            
                <h3>Unique Security Validations Per API</h3>
                <InputNumber
                  name="uniqueSecValid"
                  formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\?|(,*)/g, '')}
                  value={this.state.uniqueSecValid}
                  onChange={this.handleInputChange}
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
                  value={this.state.avgBountyPayout}
                  onChange={this.handleInputChange}
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
                  value={this.state.legalBreachFine}
                  onChange={this.handleInputChange}
                >
                </InputNumber>
                <h3>Breach Probability (Annually Per API)</h3>
                <InputNumber
                  name="breachProb"
                  precision={1}
                  formatter={value => `${value}%`}
                  parser={value => value.replace('%', '')}
                  value={this.state.breachProb}
                  onChange={this.handleInputChange}
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
                  value={this.state.devTimePerValid}
                  onChange={this.handleInputChange}
                >
                </InputNumber>
                <h3>Hourly Wage Per Engineer</h3>
                <InputNumber
                  name="hourlyWage"
                  precision={2}
                  formatter={value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$?|(,*)/g, '')}
                  value={this.state.hourlyWage}
                  onChange={this.handleInputChange}
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