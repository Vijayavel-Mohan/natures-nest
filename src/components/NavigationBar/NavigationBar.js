import React, { Component } from 'react';
import { Navbar, Nav, Icon, Dropdown ,Badge} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './NavigationBar.css';




export default class NavigationBar extends Component {
    iconSize = "lg";
    baseUrl = this.props.baseUrl;
    state = {
        onlyLogin:false,
        user: 'User',
        badgeContent : 34
    }

   


    loginDropdownMenu = (onlyLogin) => {
        if(onlyLogin){
            return <Nav.Item  href={this.baseUrl + '/login'} icon={< Icon icon='avatar' size={this.iconSize} />} />
        }
        return (<Dropdown   trigger='hover' icon={<Icon icon="avatar" size={this.iconSize} />} title={this.state.user}>
                    <Dropdown.Item icon={<Icon icon="bars" size={this.iconSize} />}>My Orders</Dropdown.Item>
                    <Dropdown.Item icon={<Icon icon="sign-out" size={this.iconSize} />}>Sign Out</Dropdown.Item>
                </Dropdown>);
    };


    notificationBadge = (onlyLogin) =>{
            this.cartNav =  <Nav.Item  href={this.baseUrl + '/my-cart'} icon={< Icon icon='shopping-cart' size={this.iconSize} />} > Cart </Nav.Item>;
            if(onlyLogin || this.state.badgeContent === 0){
              return this.cartNav;
            }
            return  (<Badge  maxCount={9} content={this.state.badgeContent} children={this.cartNav}/> );
    }



    render() {
        const { onlyLogin} = this.state;
        this.loginButtonComponent =  this.loginDropdownMenu(onlyLogin);
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
                            <Nav.Item  href={this.baseUrl} icon={< Icon icon='home' size={this.iconSize} />} > Home </Nav.Item>
                            <Nav.Item  href={this.baseUrl + '/about-us'} icon={< Icon icon='peoples' size={this.iconSize} />} > About Us </Nav.Item>
                            <Nav.Item  href={this.baseUrl + '/shop'} icon={< Icon icon='shopping-bag' size={this.iconSize} />} > Shop </Nav.Item>
                             {this.notificationBadgeComponent}
                            <Nav.Item  href={this.baseUrl + '/contact-us'} icon={< Icon icon='phone-square' size={this.iconSize} />} > Contact </Nav.Item>
                            {this.loginButtonComponent}
                        </Nav >
                    </Navbar.Body>
                </Navbar >
            </div >
        );
    }
}