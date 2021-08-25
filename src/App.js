import './App.css';

import leftArrow from './assets/img/Stroke-1.png'
import rightArrow from './assets/img/StrokeR.png'
import leftBlackArrow from './assets/img/blackLeft.png'
import rightBlackArrow from './assets/img/blackRight.png'
import macbook from './assets/img/macbook.png'

import TopProduct from './components/TopProduct'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="inner">
          <section className="slider">
            <div className="slider-wrap">
              <div className="l-arrow">
                <img src={leftArrow} alt="l-arrow" className="l-arr" />
              </div>
              <div className="contet-text">
                <p className="text">
                  подпишись на инстаграм: <b><a target="_blank" rel="noreferrer"
                    href="https://www.instagram.com/snieda_programmer/">@snieda_programmer</a></b>
                </p>
              </div>
              <div className="r-arrow">
                <img src={rightArrow} alt="r-arrow" className="r-arr" />
              </div>
            </div>
            <div className="slider-page">
              <div className="page active"></div>
              <div className="page"></div>
              <div className="page"></div>
            </div>
          </section>


          <section className="top">
            <div className="title">
              <div className="title-text">Топ &#128293;</div>
              <div className="title-pick"></div>
            </div>
            <div className="top-content">
              <div className="lef-arrow">
                <img src={leftBlackArrow} alt="arrow" className="left-pick" />
              </div>

              <TopProduct />
              <TopProduct />
              <TopProduct />
              <TopProduct />
              <TopProduct />


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

                <div className="big-card">
                  <div className="big-card-wrap">
                    <div className="big-card-img">
                      <img src={macbook} alt="nb" className="big-card-pick" />
                    </div>
                    <p className="name">Apple MacBook Air 13" M1</p>
                    <p className="price">79000 руб</p>
                    <div className="big-card-bar">
                      <button className="big-card-button">Купить</button>
                      <div className="big-pick-star active"></div>
                    </div>
                  </div>
                </div>


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

              </div>
              <div className="catalog-line">

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


                <div className="big-card">
                  <div className="big-card-wrap">
                    <div className="big-card-img">
                      <img src={macbook} alt="nb" className="big-card-pick" />
                    </div>
                    <p className="name">Apple MacBook Air 13" M1</p>
                    <p className="price">79000 руб</p>
                    <div className="big-card-bar">
                      <button className="big-card-button">Купить</button>
                      <div className="big-pick-star active"></div>
                    </div>
                  </div>
                </div>


                <div className="big-card">
                  <div className="big-card-wrap">
                    <div className="big-card-img">
                      <img src={macbook} alt="nb" className="big-card-pick" />
                    </div>
                    <p className="name">Apple MacBook Air 13" M1</p>
                    <p className="price">79000 руб</p>
                    <div className="big-card-bar">
                      <button className="big-card-button disabled">Купить</button>
                      <div className="big-pick-star"></div>
                    </div>
                  </div>
                </div>

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