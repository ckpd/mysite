import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './DataItem.css';

export default class DataItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
        this.onOpenModal = this.onOpenModal.bind(this);  
      }
    onOpenModal =() => {
        this.setState({ open: true });
    };
    
     onCloseModal = () =>{
        this.setState({ open: false });
    };

    render(){
        let title = localStorage.getItem('title');
        return(       
             
        <div className="items"> 
            <h1>{this.props.data.avatar}</h1>
            <img src={require(`../../assets/imgs/${this.props.data.avatar}.png`)} alt={this.props.data.avatar}/>`
            <button onClick={()=>this.onOpenModal()} >  Book Now </button>
            <Modal open={this.state.open} handleClose={this.onCloseModal}>
                <h1>You selected {this.props.data.title}</h1>
                <p>Hit continue to complete reservation </p>
                <p>pickup location</p>
                <p>pickup date</p>
                <p>dropoff date</p>
                <hr/>
                <a href="#" onClick={this.props.handleClick.bind(this, this.props.data)}>Continue Reservation</a>
                <hr/>
            </Modal>
            </div>    
        );
    }
}