import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import useGeneralStore from "stores/generalStore.js"

function DemoNavbar(props) {
  const [collapseOpen, toggleCollapse] = React.useState(false);
  const [userName, setUserName] = React.useState("ASANA")
  // const [login, setLogin] = React.useState(false)

  const { logout, username, isLoginOpen, setLoginIsOpen } = useGeneralStore()
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    setUserName(username);
    headroom.init();
  });
  
  const logout_2 = (e) => 
  {
    logout();
    setLoginIsOpen(false);
    //localStorage.clear();
  }
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/index" tag={Link}>
            <img alt="..." src={require("assets/img/brand/white.png")}></img>
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      alt="..."
                      src={require("assets/img/brand/blue.png")}
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >
            <UncontrolledDropdown nav>
              <DropdownToggle
                data-toggle="dropdown"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                role="button"
                tag={NavLink}
              >
                <i className="ni ni-ui-04 d-lg-none"></i>
                <span className="nav-link-inner--text">template</span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-xl">
                <div className="dropdown-menu-inner">
                  <Media
                    className="d-flex align-items-center"
                    to="/index"
                    tag={Link}
                  >
                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                      <i className="ni ni-spaceship"></i>
                    </div>
                    <Media body className="ml-3">
                      <h6 className="heading text-primary mb-md-1">
                      index
                      </h6>
                      <p className="description d-none d-md-inline-block mb-0">
                        
                      </p>
                    </Media>
                  </Media>
                  <Media
                    className="d-flex align-items-center"
                    to="/presentation"
                    tag={Link}
                  >
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-palette"></i>
                    </div>
                    <Media body className="ml-3">
                      <h6 className="heading text-primary mb-md-1">
                      presentation
                      </h6>
                      <p className="description d-none d-md-inline-block mb-0">
                      </p>
                    </Media>
                  </Media>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle
                data-toggle="dropdown"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                role="button"
                tag={NavLink}
              >
                <i className="ni ni-ui-04 d-lg-none"></i>
                <span className="nav-link-inner--text">Work</span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-xl">
                <div className="dropdown-menu-inner">
                  <Media
                    className="d-flex align-items-center"
                    to="/job-offer"
                    tag={Link}
                  >
                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                      <i className="ni ni-spaceship"></i>
                    </div>
                    <Media body className="ml-3">
                      <h6 className="heading text-primary mb-md-1">
                        find job
                      </h6>
                      <p className="description d-none d-md-inline-block mb-0">
                        
                      </p>
                    </Media>
                  </Media>
                  <Media
                    className="d-flex align-items-center"
                    to="/find-worker"
                    tag={Link}
                  >
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-palette"></i>
                    </div>
                    <Media body className="ml-3">
                      <h6 className="heading text-primary mb-md-1">
                        find worker
                      </h6>
                      <p className="description d-none d-md-inline-block mb-0">
                      </p>
                    </Media>
                  </Media>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-app d-lg-none"></i>
                  <span className="nav-link-inner--text">Life</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem tag={Link} to="/sections#headers">
                    <i className="ni ni-album-2 text-info"></i>
                    community
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sections#headers">
                    <i className="ni ni-chat-round text-info"></i>
                    news
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-single-copy-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">Study</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="ni ni-tie-bow text-warning"></i>
                    Korean Study
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  hidden={!isLoginOpen}
                >
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow"
                    src={require("assets/img/faces/team-2.jpg")}
                    style={{ width: "35px" }}
                  ></img>
                  <span className="nav-link-inner--text">{userName}</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/register-page" tag={Link} 
                      onClick={(e) => logout(e)}>
                    <i className="ni ni-chat-round text-primary"></i>
                    LogOut
                  </DropdownItem>
                  <DropdownItem to="/account-settings" tag={Link}>
                    <i className="ni ni-lock-circle-open text-muted"></i>
                    Account Settings
                  </DropdownItem>
                  <DropdownItem to="/chat-page" tag={Link}>
                    <i className="ni ni-chat-round text-primary"></i>
                    Language
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  hidden={isLoginOpen}
                >
                  
                  <i className="ni ni-tablet-button d-lg-none"></i>
                  <span className="nav-link-inner--text">Setting</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="ni ni-chat-round text-primary"></i>
                    Login
                  </DropdownItem>
                  <DropdownItem to="/chat-page" tag={Link}>
                    <i className="ni ni-chat-round text-primary"></i>
                    Language
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

DemoNavbar.defaultProps = {
  type: "dark",
};

DemoNavbar.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default DemoNavbar;
