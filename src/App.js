import './App.css';

import leftBlackArrow from './assets/img/blackLeft.png'
import rightBlackArrow from './assets/img/blackRight.png'


import TopProduct from './components/TopProduct'
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ProductBlock from './components/ProductBlock'


function App(props) {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="inner">

          <Slider />


          <section className="top">
            <div className="title">
              <div className="title-text">Топ &#128293;</div>
              <div className="title-pick"></div>
            </div>
            <div className="top-content">
              <div className="lef-arrow">
                <img src={leftBlackArrow} alt="arrow" className="left-pick" />
              </div>

              <TopProduct price={100000} />
              <TopProduct price={4545} />
              <TopProduct price={4444444} />
              <TopProduct price={1223456} />
              <TopProduct price={99000} />


              <div className="right-arrow">
                <img src={rightBlackArrow} alt="arrow" className="right-pick" />
              </div>
            </div>
          </section>


          <section className="catalog">
            <div className="catalog-wrap">
              <div className="catalog-title">
                <div className="catalog-title-name">Товары</div>

                <div className="catalog-filter"></div>
                <div className="sortPopup">
                  <ul>
                    <li className="active">
                      <p>Цена</p>
                    </li>
                    <li>
                      <p>Рейтинг</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="catalog-line">

                <ProductBlock />
                <ProductBlock />
                <ProductBlock />
                <ProductBlock />
              </div>
              <div className="catalog-line">
                <ProductBlock />
                <ProductBlock />
                <ProductBlock />
                <ProductBlock />
              </div>
              <div className="catalog-button-wrap">
                <button className="catalog-button cancel">Больше</button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default App;