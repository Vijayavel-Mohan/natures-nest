import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';
import './NavigationBar.css';

defineLordIconElement(loadAnimation);

const iconsMap = {
    'home': {
        'white': process.env.PUBLIC_URL + '/assets/icons/home_white.json',
        'green': process.env.PUBLIC_URL + '/assets/icons/home_green.json'
    },
    'contact': {
        'white': process.env.PUBLIC_URL + '/assets/icons/contact_white.json',
        'green': process.env.PUBLIC_URL + '/assets/icons/contact_green.json'
    },
    'shop': {
        'white': process.env.PUBLIC_URL + '/assets/icons/shop_white.json',
        'green': process.env.PUBLIC_URL + '/assets/icons/shop_green.json'
    },
    'cart': {
        'white': process.env.PUBLIC_URL + '/assets/icons/cart_white.json',
        'green': process.env.PUBLIC_URL + '/assets/icons/cart_green.json'
    },
    'aboutUs': {
        'white': process.env.PUBLIC_URL + '/assets/icons/about_us_white.json',
        'green': process.env.PUBLIC_URL + '/assets/icons/about_us_green.json'
    },
    'login': {
        'white': process.env.PUBLIC_URL + '/assets/icons/login_white.json',
        'green': process.env.PUBLIC_URL + '/assets/icons/login_green.json'
    }
}


export default class NavBar extends Component {
    currentRoute = null;
    maxBadge = 9;
    state = {
        home: iconsMap['home']['white'],
        contact: iconsMap['contact']['white'],
        cart: iconsMap['cart']['white'],
        shop: iconsMap['shop']['white'],
        aboutUs: iconsMap['aboutUs']['white'],
        login: iconsMap['login']['white'],
        isUserLogged: false,
        currentUserName: 'Login',
        badgeContent: 0
    }

    changeIconToWhite = (key) => {
        var map = {};
        map[key] = iconsMap[key]['white']
        this.setState(map);
    }

    setBadgeContent = (count) => {
        this.setState({
            badgeContent: count
        });
    }

    changeIconToGreen = (key) => {
        var map = {};
        map[key] = iconsMap[key]['green']
        this.setState(map);
    }

    checkActive = () => {
        this.activeData = document.getElementsByClassName('active-link');
        this.changeIconToGreen(this.activeData[0].dataset['link']);
        if (this.currentRoute == null) {
            this.currentRoute = this.activeData[0].id;
        } else if (this.currentRoute !== this.activeData[0].id) {
            var element = document.getElementById(this.currentRoute);
            this.changeIconToWhite(element.dataset['link']);
            this.currentRoute = this.activeData[0].id;
        }
    }

    showAllItems = () => {
        Array.from(document.getElementsByClassName('items'))
            .forEach(e => {
                e.style.display = 'block';
                e.classList.add('menu-anchor');
            });
        document.getElementById('navgation-bar').style.height = '350px';
    }

    hideOtherItems = (activeDataLink) => {
        if(window.getComputedStyle(document.getElementById('hamburger-icon')).display == 'none'){
            return;
        }
        Array.from(document.getElementsByClassName('items'))
            .forEach(e => {
                if (e.dataset['link'] !== activeDataLink) {
                    e.style.display = 'none';
                }
                e.classList.remove('menu-anchor');
            });
        document.getElementById('navgation-bar').style.height = '48px';
    }

    componentDidMount() {
        setInterval(this.checkActive, 10);
    }

    render() {
        this.home = this.state.home;
        this.contact = this.state.contact;
        this.cart = this.state.cart;
        this.shop = this.state.shop;
        this.aboutUs = this.state.aboutUs;
        this.login = this.state.login
        this.isUserLogged = this.state.isUserLogged;
        this.badgeContent = this.state.badgeContent
        this.profileDropDown = (<React.Fragment>
            <div class="dropdown-content login-dropdown-content">
                <a href="#">My Orders</a>
                <a href="#">Profile</a>
                <a href="#">Sign Out</a>
            </div>
        </React.Fragment>);


        return (
            <div className='nav-bar' id='navgation-bar'>
                <NavLink to='/natures-nest'  data-link='home' onClick={this.hideOtherItems.bind(this, 'home')} className='brand'>Nature's Nest</NavLink>
                <nav>
                    <li>
                        <NavLink id='home-nav-link'
                            to='/natures-nest'
                            activeClassName='active-link'
                            data-link='home'
                            onMouseOver={() => this.changeIconToGreen('home')}
                            onMouseLeave={() => this.changeIconToWhite('home')}
                            onClick={this.hideOtherItems.bind(this, 'home')}
                            className='items'>Home
                                     <lord-icon class='anim-icons home' animation="auto" src={this.home}></lord-icon>
                        </NavLink>
                        <NavLink id='about-nav-link'
                            to='/about-us'
                            activeClassName='active-link'
                            data-link='aboutUs'
                            onMouseOver={() => this.changeIconToGreen('aboutUs')}
                            onMouseLeave={() => this.changeIconToWhite('aboutUs')}
                            onClick={this.hideOtherItems.bind(this, 'aboutUs')}
                            className='items'>About us
                                     <lord-icon id='about-us-icon' class='anim-icons about-us' animation="auto" src={this.aboutUs}></lord-icon>
                        </NavLink>
                        <NavLink id='shop-nav-link'
                            to='/shop'
                            activeClassName='active-link'
                            data-link='shop'
                            onMouseOver={() => this.changeIconToGreen('shop')}
                            onMouseLeave={() => this.changeIconToWhite('shop')}
                            onClick={this.hideOtherItems.bind(this, 'shop')}
                            className='items'>Shop
                                     <lord-icon class='anim-icons shop' animation="auto" src={this.shop}></lord-icon>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </NavLink>
                        <NavLink id='cart-nav-link' 
                        to='/my-cart' 
                        activeClassName='active-link'
                         data-link='cart'
                          onMouseOver={() => this.changeIconToGreen('cart')} 
                          onMouseLeave={() => this.changeIconToWhite('cart')}
                          onClick={this.hideOtherItems.bind(this, 'cart')}
                           className='items'>Cart
                            {this.isUserLogged ? <span className='badge'>{this.badgeContent !== 0 ? this.badgeContent > this.maxBadge ? this.maxBadge + '+' : this.badgeContent : null}</span> : null}
                            <lord-icon class='anim-icons cart' animation="auto" src={this.cart}></lord-icon>
                        </NavLink>
                        <NavLink id='contact-nav-link'
                         to='/contact'
                          activeClassName='active-link' 
                          data-link='contact'
                           onMouseOver={() => this.changeIconToGreen('contact')} 
                           onMouseLeave={() => this.changeIconToWhite('contact')}
                           onClick={this.hideOtherItems.bind(this, 'contact')}
                            className='items'>Contact
                                     <lord-icon class='anim-icons contact' animation="auto" src={this.contact}></lord-icon>
                        </NavLink>
                        <NavLink id='login-nav-link'
                         to='/login'
                          activeClassName='active-link' 
                          data-link='login'
                           onMouseOver={() => this.changeIconToGreen('login')} 
                           onMouseLeave={() => this.changeIconToWhite('login')} 
                           onClick={this.hideOtherItems.bind(this, 'login')}
                           className='items'>{this.state.currentUserName}
                            <lord-icon class='anim-icons login' animation="auto" src={this.login}></lord-icon>
                            {this.isUserLogged ? this.profileDropDown : null}
                        </NavLink>
                        <a href="javascript:void(0);" id='hamburger-icon' class="hamburger-bar-icon" onClick={this.showAllItems}>
                            <i class="fa fa-bars"></i>
                        </a>
                    </li>
                </nav>
            </div>
        );
    }
}