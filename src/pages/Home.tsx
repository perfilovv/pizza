import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
    const [items, setItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://6614489d2fc47b4cf27c0ab5.mockapi.io/items')
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
    }, []);
    return (
        <>
            <div className="content-top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content-title">Все пиццы</h2>
            <div className="content-items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => (
                          <Skeleton key={index} />
                      ))
                    : items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
            </div>
        </>
    );
};

export default Home;
