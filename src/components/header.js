import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (
  <header className="bg-dark">
    {/* <Container> */}
    <Navbar expand="sm" variant="dark" bg="dark" fixed="top">
      <Navbar.Brand className='nav-link' activeClassName='active'>
        <Link to='/'>
          NPB
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="ml-auto">
          <Nav.Item as="li">
            <Link to="/" className="nav-link" activeClassName="active">
              Home
            </Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Link to="/projects" className="nav-link" activeClassName="active">
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/blogs" className="nav-link" activeClassName="active">
              Blog
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/page-2" className="nav-link" activeClassName="active">
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* </Container> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
