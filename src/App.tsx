import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import pizzas from './assets/pizzas.json';

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
                            {pizzas.map((obj) => (
                                <PizzaBlock {...obj} key={obj.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
