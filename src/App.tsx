import Categories from './components/Categories';
import Header from './components/Header';
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
