import React, { Component } from 'react';
import DataItem from './DataItem'

class DataList extends Component{
    constructor(props){
        super(props);
        this.renderDataItems = this.renderDataItems.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(data){
        this.props.handleAddToCart(data)
    }
    renderDataItems(data){
        return(
            <div key={data.vehicle_id}>
            <DataItem
                data={data}
                handleClick={this.handleClick}>
            </DataItem>
            </div>
        );
    
    }

    render(){
        return (
            <section className="options">
            <h1>Choose A Vehicle Type</h1>
            <p>Something about this as subheader</p>
            <div className="grid-items__array">
            {this.props.data.slice(0,3).map(this.renderDataItems)}
            </div>
            </section>
        )
    }
}

export default DataList;