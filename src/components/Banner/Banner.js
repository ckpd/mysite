import React, {Component} from 'react'
import './Banner.css'
export default class Banner extends Component {
    render(){
        return(
        <section className="banner">
            <div className="callToAction">
                <h1>{this.props.header}</h1>
                <p>{this.props.subTitle}</p>
                <img src={this.props.down} alt={this.props.alt}></img>
            </div>
        </section>
        );
    }
}