import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../App';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

const Home = () => {
    const { searchValue } = useContext(SearchContext);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortProperty: 'rating',
    });

    useEffect(() => {
        setIsLoading(true);

        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        fetch(
            `https://6614489d2fc47b4cf27c0ab5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        )
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    const skeletons = [...new Array(6)].map((_, index) => (
        <Skeleton key={index} />
    ));

    const pizzas = items.map((obj: any) => (
        <PizzaBlock {...obj} key={obj.id} />
    ));

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
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination
                onChangePage={(number: number) => setCurrentPage(number)}
            />
        </div>
    );
};

export default Home;
