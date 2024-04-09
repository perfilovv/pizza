import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import { useEffect, useState } from 'react';

function App() {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://6614489d2fc47b4cf27c0ab5.mockapi.io/items')
            .then((res) => res.json())
            .then((json) => setItems(json));
    }, []);
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
                            {items.map((obj) => (
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
