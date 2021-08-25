import React from 'react'
import macbook from '../assets/img/macbook.png'

function ProductBlock() {
    return (
        <div className="big-card">
            <div className="big-card-wrap">
                <div className="big-card-img">
                    <img src={macbook} alt="nb" className="big-card-pick" />
                </div>
                <p className="name">Apple MacBook Air 13" M1</p>
                <p className="price">79000 руб</p>
                <div className="big-card-bar">
                    <button className="big-card-button">Купить</button>
                    <div className="big-pick-star"></div>
                </div>
            </div>
        </div>
    )
}

export default ProductBlock
