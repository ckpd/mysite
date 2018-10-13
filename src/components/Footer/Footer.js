import React, {Component} from 'react'
import './Footer.css'
export default class Footer extends Component {
    render(){
        return(
            <div>
        <section className="footer">
            <div className="footer__item">
                <h1>Branding </h1>
                <p>all rights reserved 2018</p>
            </div>
            <div className="footer__item">
            <p>site map</p>
            <p>privacy policy</p>
            </div>
            <div className="footer__item">
                <p>Marrast Hill </p>
                <p>Tempe </p>
                <p>Saint George </p>
                <br/>
                <p>tel: 1-473-405-5738</p>
                <p>email: info@brandname.com </p>
                <br/>
                <p>signup for our newsletter</p>
            </div>
        </section>
        </div>
        );
    }
}