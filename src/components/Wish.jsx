import React from 'react'
import "../App.css"

export default class Wish extends React.Component {
    constructor (props){
      super(props);
      this.state = {key: props.key, importance: props.importance, name: props.name, price: props.price, category: props.category, additional_info: props.additional_info}
    }
  
    render() {
      
      return (
        <div className={`wish ${this.state.importance} `} id={`wish-${this.state.key}`}>
                <div className="header">
                    <p className="options">⋮</p>
                </div>
                <div className="name">
                    <span>{this.state.name}</span>
                    <div className="description">
                        <p className="description-text">{this.state.additional_info}</p>
                    </div>
                </div>
                <div className="body">
                    <div className="triangle-down" onClick="openDescription(this,1)"></div>
                    <span className="price">{this.state.price}</span>
                    <div className="category">
                        <span>Категория:</span>
                        <a className="category-name">{this.state.category}</a>
                    </div>
                </div>
            </div>
      );
    }
  } 
