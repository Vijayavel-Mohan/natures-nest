import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './NavigationBar.css';




export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.baseUrl = this.props.baseUrl;
        this.state = {
            activeItem: true,
        };
    }
    handleSelect(eventKey) {
        this.setState({
            activeItem: false
        });
    }

    render() {
        const { activeItem } = this.state;
        return (
            <div className='nav-wrapper' >
                <Navbar appearance='inverse' >
                    <Navbar.Header > 
                    <a href={this.baseUrl} className='navbar-brand logo'>
                      <img src= '' alt=''/>
                    </a>
                    </Navbar.Header>
                    <Navbar.Body >
                        <Nav onSelect={this.handleSelect}
                            activeKey={activeItem}
                            pullRight >
                            <Nav.Item href={this.baseUrl} icon={< Icon icon='home' />} > Home </Nav.Item>
                            <Nav.Item href={this.baseUrl + '/about-us'} icon={< Icon icon='peoples' />} > About Us </Nav.Item>
                            <Dropdown icon={< Icon icon='shopping-cart' />} title='Shop' >
                                <Dropdown.Item icon={< Icon icon='peoples' />} > Cart </Dropdown.Item>
                                <Dropdown.Item icon={< Icon icon='peoples' />} > Checkout </Dropdown.Item>
                            </Dropdown >
                            <Nav.Item href={this.baseUrl + '/contact-us'} icon={< Icon icon='phone-square' />} > Contact </Nav.Item>
                            <Nav.Item href={this.baseUrl + '/login'} icon={< Icon icon='avatar' />} > Login </Nav.Item> </Nav >
                    </Navbar.Body>
                </Navbar >
            </div >
        );
    }
}