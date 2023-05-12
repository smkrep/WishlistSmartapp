import React from 'react'
import "../App.css"


export default class Wish extends React.Component {
    constructor (props){
      super(props);
      this.state = {id: props.id, importance: props.importance, name: props.name, price: props.price, category: props.category, additional_info: props.additional_info}
        this.handleClick = this.handleClick.bind(this)
    }

  
    render() {
      
      return (
        <div className={`wish ${this.state.importance} `} id={`wish-${this.state.id}`}>
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
                    <div className="triangle-down" onClick={this.handleClick}></div>
                    <span className="price">{this.state.price}</span>
                    <div className="category">
                        <span>Категория:</span>
                        <a className="category-name">{this.state.category}</a>
                    </div>
                </div>
            </div>
      );
    }

    handleClick(event){
        let el = event.currentTarget
        const wish = document.getElementById(`wish-${this.state.id}`)
        wish.classList.toggle('expanded')
        if (el.classList.contains('triangle-down')){
            el.classList.remove('triangle-down')
            el.classList.add('triangle-up')
        }
        else if (el.classList.contains('triangle-up')){
            el.classList.remove('triangle-up')
            el.classList.add('triangle-down')
        }
    }

  } 
