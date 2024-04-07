import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
    return (
        <div className="app">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content-top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content-title">Все пиццы</h2>
                        <div className="content-items">
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
