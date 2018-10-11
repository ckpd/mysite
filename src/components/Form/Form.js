import React, { Component } from 'react';
import Order from '../Order/Order'
import './Form.css'
class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        alert("A name was submitted: " + this.state.value);
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <hr/>
                <section className='Form'>
                <h1>Complete reservation</h1>
                <h2> Upon completing this reservation enquiry, you will receive::</h2>
                <p>Your rental voucher to produce on arrival at the rental desk and a customer support number.</p>
                <Order/>
                <hr/>
                
                <h1>Personal Information</h1>
                <form>
                    <ul className="flex-outer">
                        <li>
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" placeholder="Enter your first name here"/>
                        </li>
                        <li>
                            <label for="last-name">Last Name</label>
                            <input type="text" id="last-name" placeholder="Enter your last name here"/>
                        </li>
                        <li>
                            <label for="email">Email</label>
                            <input type="text" id="email" placeholder="Enter your email here"/>
                        </li>
                        <li>
                            <label for="textarea">textarea</label>
                            <input type="textarea" id="textarea" placeholder="Enter your email here"/>
                        </li>
                        <li>
                            <input type="submit" value="submit"/>
                        </li>
                    </ul>
                </form>
            </section>
            </div>
        );
    }
}


export default Form;