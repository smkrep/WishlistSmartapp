import React from 'react'
import "../App.css"

export const Wish = () => {
  return (
    <div className="wish low-priority" id="wish-1">
                <div className="header">
                    <p className="options">⋮</p>
                </div>
                <div className="name">
                    <span>Пивооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооооо</span>
                    <div className="description">
                        <span className="description-parameter">sdfsdf</span>
                        <p className="description-text">ПриветПриветПриветПриветПриветПриветПриветПривет</p>
                    </div>
                </div>
                <div className="body">
                    <div className="triangle-down" onclick="openDescription(this,1)"></div>
                    <span className="price">10 000 000 000 000 000$</span>
                    <div className="category">
                        <span>Категория:</span>
                        <a className="category-name">Чилл</a>
                    </div>
                </div>
            </div>
  )
}
