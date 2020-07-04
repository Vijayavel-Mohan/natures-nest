import React, { Component } from 'react';
import { Navbar, Nav, Icon, Dropdown, Badge } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './NavigationBar.css';
import { Link } from 'react-router-dom';




export default class NavigationBar extends Component {
    iconSize = "lg";
    baseUrl = this.props.baseUrl;
    state = {
        onlyLogin: false,
        user: 'User',
        badgeContent: 0
    }




    loginDropdownMenu = (onlyLogin) => {
        if (onlyLogin) {
            return (<Nav.Item icon={< Icon icon='avatar' size={this.iconSize} />}>
                        <Link className='link' to='/login' />
                     </Nav.Item>);
        }
        return (<Dropdown trigger={['click', 'hover']} icon={<Icon icon="avatar" size={this.iconSize} />} title={this.state.user}>
            <Dropdown.Item icon={<Icon icon="bars" size={this.iconSize} />}>My Orders</Dropdown.Item>
            <Dropdown.Item icon={<Icon icon="sign-out" size={this.iconSize} />}>Sign Out</Dropdown.Item>
        </Dropdown>);
    };


    notificationBadge = (onlyLogin) => {
        this.cartNav = (<Nav.Item icon={< Icon icon='shopping-cart' size={this.iconSize} />} >
                             <Link className='link' to='/my-cart'> Cart</Link>
                         </Nav.Item>);
        if (onlyLogin || this.state.badgeContent === 0) {
            return this.cartNav;
        }
        return (<Badge maxCount={9} content={this.state.badgeContent} children={this.cartNav} />);
    }



    render() {
        const { onlyLogin } = this.state;
        this.loginButtonComponent = this.loginDropdownMenu(onlyLogin);
        this.notificationBadgeComponent = this.notificationBadge(onlyLogin);
        return (
            <div className='nav-wrapper' >
                <Navbar className="navbar">
                    <Navbar.Header >
                        <a href={this.baseUrl} className='navbar-brand logo'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/log.png'} alt='' />
                        </a>
                    </Navbar.Header>

                    <Navbar.Body >
                        <Nav pullRight >
                            <Nav.Item icon={< Icon icon='home' size={this.iconSize} />}>
                                <Link className='link' to='/'> Home </Link>
                            </Nav.Item>
                            <Nav.Item icon={< Icon icon='peoples' size={this.iconSize} />} >
                                <Link className='link' to='/about-us'>About Us</Link>
                            </Nav.Item>
                            <Nav.Item icon={< Icon icon='shopping-bag' size={this.iconSize} />} >
                                <Link className='link' to='/shop'>Shop</Link>
                            </Nav.Item>
                            {this.notificationBadgeComponent}
                            <Nav.Item  icon={< Icon icon='phone-square' size={this.iconSize} />} >
                                <Link className='link' to='/contact'>Contact</Link>
                            </Nav.Item>
                            {this.loginButtonComponent}
                        </Nav >
                    </Navbar.Body>
                </Navbar >
            </div >

        );
    }
}