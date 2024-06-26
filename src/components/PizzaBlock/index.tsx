import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCartItemById } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';
import { addItem } from '../../redux/cart/slice';
interface IPizzaBlock {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    sizes: number[];
    types: number[];
    rating: number;
}

const typeOfPizza = ['тонкое', 'традиционное'];

const PizzaBlock: FC<IPizzaBlock> = (props) => {
    const { id, imageUrl, title, price, sizes, types } = props;
    const cartItem = useSelector(selectCartItemById(id));
    const dispatch = useDispatch();
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            type: typeOfPizza[activeType],
            size: sizes[activeSize],
            count: 0,
        };
        dispatch(addItem(item));
    };

    return (
        <div className="pizza-block">
            <Link key={id} to={`/pizza/${id}`}>
                <img src={imageUrl} alt="Pizza" className="pizza-block-image" />
                <h4 className="pizza-block-title">{title}</h4>
            </Link>
            <div className="pizza-block-selector">
                <ul>
                    {types &&
                        types.map((type) => (
                            <li
                                onClick={() => {
                                    setActiveType(type);
                                }}
                                className={activeType === type ? 'active' : ''}
                                key={type}
                            >
                                {typeOfPizza[type]}
                            </li>
                        ))}
                </ul>
                <ul>
                    {sizes &&
                        sizes.map((size: number, i: number) => (
                            <li
                                onClick={() => {
                                    setActiveSize(i);
                                }}
                                className={activeSize === i ? 'active' : ''}
                                key={i}
                            >
                                {size}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="pizza-block-bottom">
                <div className="pizza-block-price">от {price} ₽</div>
                <button
                    onClick={onClickAdd}
                    className="button button-outline button-add"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedCount > 0 && <i>{addedCount}</i>}
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;
