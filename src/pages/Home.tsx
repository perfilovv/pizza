import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortProperty: 'rating',
    });

    useEffect(() => {
        setIsLoading(true);

        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        fetch(
            `https://6614489d2fc47b4cf27c0ab5.mockapi.io/items?${
                categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sortBy}&order=${order}`
        )
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    return (
        <div className="container">
            <div className="content-top">
                <Categories
                    value={categoryId}
                    onChangeCategory={(i: number) => setCategoryId(i)}
                />
                <Sort
                    value={sortType}
                    onChangeSort={(i: any) => setSortType(i)}
                />
            </div>
            <h2 className="content-title">Все пиццы</h2>
            <div className="content-items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => (
                          <Skeleton key={index} />
                      ))
                    : items.map((obj: any) => (
                          <PizzaBlock {...obj} key={obj.id} />
                      ))}
            </div>
        </div>
    );
};

export default Home;
