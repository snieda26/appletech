import React from 'react'

import macbook from '../assets/img/macbook.png'

function TopProduct() {
    return (
        <div className="card">
            <div className="card-wrap">
                <div className="img">
                    <img src={macbook} alt="nb" className="card-pick" />
                </div>
                <p className="name">Хит продаж &#128293;</p>
                <p className="price">79000 руб</p>
                <div className="bar">
                    <button className="button">Купить</button>
                    <div className="pick-star"></div>
                </div>
            </div>
        </div>
    )
}

export default TopProduct

