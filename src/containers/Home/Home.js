import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CardDeck from 'react-bootstrap/CardDeck'
import ImgCard from '../../components/Card/ImgCard';
import './Home.css';
import Featurete from '../../components/Featurete/Featurete';
import Testimony from '../../components/Testimony/Testimony';

const healDisplayCards = [{img:'natural-heal1.jpg',title:'Shampoo'},
                        {img:'natural-heal2.jpg',title:'Body Lotion'},
                        {img:'natural-heal3.jpg',title:'Face Serum'}];

const featureHeading = 'Why Nature\'s Nest?';    
const featureContent='Details';                    


export default class Home extends Component {
    
    displayCards = healDisplayCards.map((data,index) =>{
    return <ImgCard key={index} img={data.img} title={data.title} shadowEffect={false}/> });
     
    render() {
        return (
            <React.Fragment>
                <Carousel/>
                <CardDeck>{this.displayCards}</CardDeck>
                <hr style={{ 'margin':'80px 0'}}/>
                <Featurete img='feature_img.jpg' heading={featureHeading} content={featureContent}/>
                <hr style={{ 'margin':'80px 0'}}/>
                <Featurete img='feature_img.jpg' heading={featureHeading} content={featureContent} imagePosition='right'/>
                <hr style={{ 'margin':'80px 0'}}/>
                <Testimony/>
            </React.Fragment>
        );
    }


}