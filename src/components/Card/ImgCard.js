import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import './Card.css';

export default class ImgCard extends Component {
    constructor(props) {
        super(props);
        this.imgSrc = process.env.PUBLIC_URL + '/assets/images/' + this.props.img;
        this.cardTitle = this.props.title;
        this.bodyContent = this.props.bodyContent;
        this.footer = this.props.footer;
        this.shadowEffect = true;
        if (this.props.shadowEffect === false) {
            this.shadowEffect = false;
        }
    }


    render() {
        return (
            <React.Fragment>
                <Card className={!this.shadowEffect ? 'no-shadow-card' : null}>
                    <Card.Img variant="top" src={this.imgSrc} />
                    <Card.Body>
                        {this.cardTitle ? <Card.Title>{this.cardTitle}</Card.Title> : null}
                        {this.bodyContent ? <Card.Text>{this.bodyContent}</Card.Text> : null}
                    </Card.Body>
                    {this.footer ? <Card.Footer>
                        <small className="text-muted">{this.footer}</small>
                    </Card.Footer> : null}
                </Card>
            </React.Fragment>
        );
    }
}