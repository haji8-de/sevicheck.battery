import React from "react";

import { useQuery, useMutation, gql } from '@apollo/client';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  CardHeader,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";

// Core Components
const FIND_ALL_COMPANIES = gql`
query CompanyAll($page: Int!, $pageSize: Int!) {
  companyAll(page: $page, pageSize: $pageSize) {
    id
    name
    imageUrl
    address
    address2
  }
}
`;
const FIND_ALL_JOBS = gql`
  query JobAll($page: Int!, $pageSize: Int!) {
    jobAll(page: $page, pageSize: $pageSize) {
      id
      title
      payType
      pay
      workType
      workDay
      workTimeStart
      workTimeEnd
      workDue
      position
      condition
      addtion
      applyType
      applyEndAt
      imageUrl
      companyId
      managerId
    }
  }
`;
function Companies() {
  const { loading, error, data } = useQuery(FIND_ALL_COMPANIES, {
    variables: { page: 1, pageSize: 6 },
  });

  if (loading) return <p>Loading...</p>;
  if (error)  return <p>Error : {error.message}</p>; 

  return (
    <div>
      <h3>Companies</h3>
      <Row>
        {data.companyAll.map(({ id,
                name,
                imageUrl,
                address,
                address2}) => (
    <Col lg="4" md="6">
      <Card className="card-project">
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mx-auto">
            <i className="ni ni-favourite-28"></i>
            {imageUrl}
          </div>
        </a>
        <CardBody>
          <CardTitle className="mt-3" tag="h4">
          {id}.{name}
          </CardTitle>
          <p className="card-description">
            {address}
          </p>
          <p className="card-description">
            {address2}
          </p>
          <CardFooter>
            <Button className="text-primary" color="link" type="button">
              <i className="ni ni-glasses-2"></i>
              Check more
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </Col>
        ))}
      </Row>
    </div>
  );
}
 

function Pricing5() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const { loading, error, data } = useQuery(FIND_ALL_JOBS, {
    variables: { page: 1, pageSize: 6 },
  });

  if (loading) return <p>Loading...</p>;
  if (error)  return <p>Error : {error.message}</p>; 
  return (
    <>
      <section
        className="pricing-5"
        id="pricing-6"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ill/bg_pricing5.svg") + ")",
        }}
      >
        <Container className="pt-5">
         
        {data.jobAll.map(({ id,
      title,
      payType,
      pay,
      workType,
      workDay,
      workTimeStart,
      workTimeEnd,
      workDue,
      position,
      condition,
      addtion,
      applyType,
      applyEndAt,
      imageUrl,
      companyId,
      managerId}) => (<div>{id}.{title}</div>
        ))}
          <Row>
            <Col className="d-flex justify-content-center flex-column" md="4">
              <h3 className="display-3 mt-3">
                Choose a plan for your next project
              </h3>
              <Nav className="nav-pills-primary my-4" pills role="tablist">
                <NavItem>
                  <NavLink
                    className={activeTab === "tab1" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab1");
                    }}
                  >
                    Cheaper
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "tab2" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab2");
                    }}
                  >
                    Expensive
                  </NavLink>
                </NavItem>
              </Nav>
              <p className="lead mt-0">
                You have Free Unlimited Updates and Premium Support on each
                package. You also have 20 days to request a refund.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" lg="7" md="8">
              <TabContent className="tab-space" activeTab={activeTab}>
                <TabPane tabId="tab1">
                  <Row>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            id.title
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$25</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">20GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">15</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">false</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Request a demo
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Premium
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$59</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">50GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">100</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Premium</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Request a demo
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="tab2">
                  <Row>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Gold
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$100</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">200GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Unlimited</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Premium</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Request a demo
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Platinum
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$135</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">500GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Unlimited</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">No time</b>{" "}
                              <span>Tracking</span>
                            </li>
                          </ul>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Request a demo
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
function ProjectsSection() {
  return (
    <>
      <div className="project-2">
        stte<br/>
        <Container>
          <Row>
            <Col className="my-5" lg="8">
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto text-center my-5" lg="8">
              <h3 className="display-3">Some of Our Awesome Products</h3>
              <p className="lead">
                The time is now for it to be okay to be great. People in this
                world shun people for being great.
              </p>
            </Col>
          </Row>
        <Companies/>
        <Pricing5/>
{/*         
          <Row>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mx-auto">
                    <i className="ni ni-favourite-28"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Slack bot
                  </CardTitle>
                  <p className="card-description">
                    If everything I did failed - which it doesn't, it actually
                    succeeds - just the fact that I'm willing to fail is an
                    inspiration. People are so scared to lose that they don't
                    even try.
                  </p>
                  <CardFooter>
                    <Button className="text-primary" color="link" type="button">
                      <i className="ni ni-glasses-2"></i>
                      Check more
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mx-auto">
                    <i className="ni ni-books"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Looking great
                  </CardTitle>
                  <p className="card-description">
                    You have the opportunity to play this game of life you need
                    to appreciate every moment. A lot of people don’t appreciate
                    the moment until it’s motivating the doers.
                  </p>
                  <CardFooter>
                    <Button className="text-success" color="link" type="button">
                      <i className="ni ni-key-25"></i>
                      Find a opportunity
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mx-auto">
                    <i className="ni ni-trophy"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Developer First
                  </CardTitle>
                  <p className="card-description">
                    For standing out. But the time is now to be okay to be the
                    greatest you. Would you believe in what you believe in, if
                    you were the only one who believed it?
                  </p>
                  <CardFooter>
                    <Button className="text-warning" color="link" type="button">
                      <i className="ni ni-notification-70"></i>
                      Check more
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-secondary shadow rounded-circle mx-auto">
                    <i className="ni ni-favourite-28"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Prepare launch
                  </CardTitle>
                  <p className="card-description">
                    Society has put up so many boundaries, so many limitations
                    on what’s right and wrong that it’s almost impossible to get
                    a pure thought out. It’s like a little kid, a little boy.
                  </p>
                  <CardFooter>
                    <Button
                      className="text-secondary"
                      color="link"
                      type="button"
                    >
                      <i className="ni ni-glasses-2"></i>
                      Check out now
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mx-auto">
                    <i className="ni ni-books"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Premium support
                  </CardTitle>
                  <p className="card-description">
                    Pink is obviously a better color. Everyone’s born confident,
                    and everything’s taken away from you matters is the people
                    who are sparked by it follow their dreams, too.
                  </p>
                  <CardFooter>
                    <Button className="text-danger" color="link" type="button">
                      <i className="ni ni-key-25"></i>
                      Find a opportunity
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-project">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="icon icon-lg icon-shape icon-shape-info shadow rounded-circle mx-auto">
                    <i className="ni ni-trophy"></i>
                  </div>
                </a>
                <CardBody>
                  <CardTitle className="mt-3" tag="h4">
                    Design tools
                  </CardTitle>
                  <p className="card-description">
                    Constantly growing. We’re constantly making mistakes. We’re
                    constantly trying to express ourselves and actualize our
                    dreams the position that we want to be.
                  </p>
                  <CardFooter>
                    <Button className="text-info" color="link" type="button">
                      <i className="ni ni-notification-70"></i>
                      Check more
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default ProjectsSection;
