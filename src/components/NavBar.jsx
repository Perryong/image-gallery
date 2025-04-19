import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'; // React Router NavLink
import AnchorLink from 'react-anchor-link-smooth-scroll';

export class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div id="navigation">
                <Navbar color="white" light expand="md" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <strong className="nav-brand-item">Perry ONG  | Portfolio</strong>
                        {/* Logo can be included here */}
                    </NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://perryongwq.github.io/Personal/" target="_blank" className='nav-link'>About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/Perryongwq?tab=repositories" target="_blank" className='nav-link'>Projects (Github)</NavLink>
                            </NavItem>

                        </Nav>

                </Navbar>
            </div>
        );
    }
}


