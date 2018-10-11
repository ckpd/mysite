import React, {Component} from 'react'
import dance from '../../assets/imgs/dance.png'
import girl  from '../../assets/imgs/girl.png'
import wheels  from '../../assets/imgs/wheels.png'
import bike  from '../../assets/imgs/bike.png'
import './Gallery.css'

export default class Gallery extends Component {
    render(){
        return(
        <section className="gallery">
        <h1>Our Fleet</h1>
        <p>Something about this as subheader></p>
        <div className="gallery-container">
            <div className="images">
                <img src={dance} alt="dance"></img>
            </div>
            <div className="images">
                <img src={girl} alt="girl dancing"></img>
            </div>
            <div className="images">
                <img src={wheels} alt="wheels"></img>
            </div>
            <div className="images">
                <img src={bike} alt="bike"></img>
            </div>
        
        </div>
        </section>
        )
    }
}

       