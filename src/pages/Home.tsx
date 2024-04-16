import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SearchContext } from '../App';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { setCategoryId } from '../redux/slices/filterSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { categoryId, sort } = useSelector((state: any) => state.filter);

    const { searchValue } = useContext(SearchContext);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id));
    };

    useEffect(() => {
        setIsLoading(true);

        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios
            .get(
                `https://6614489d2fc47b4cf27c0ab5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
            )
            .then((res: any) => {
                setItems(res.data);
                setIsLoading(false);
                console.log(res);
            });

        window.scrollTo(0, 0);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

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
                    onChangeCategory={onChangeCategory}
                />
                <Sort />
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
