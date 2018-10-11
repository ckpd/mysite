               
import React, {Component} from 'react';
import facebook from '../../assets/imgs/social-facebook.png'
import instagram  from '../../assets/imgs/social-instagram.png'
import './Social.css'
class Social extends Component{
    render(){
        return(
            <section className="social">
            <img src={facebook} alt="facebook icon"></img>
            <img src={instagram} alt="instagram icon"></img>
         </section>
        )
    }
}

export default Social;

       