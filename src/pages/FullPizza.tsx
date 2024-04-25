import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullPizza: FC = () => {
    const [pizza, setPizza] = useState<{
        imageUrl: string;
        title: string;
        price: number;
    }>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(
                    'https://6614489d2fc47b4cf27c0ab5.mockapi.io/items/' + id
                );
                setPizza(data);
            } catch (error) {
                alert('Ошибка при получении пиццы!');
                navigate('/');
            }
        }

        fetchPizza();
    }, []);

    if (!pizza) {
        return <>Загрузка...</>;
    }

    return (
        <div className="container">
            <div className="container-fullpizza">
                <img src={pizza.imageUrl} alt="Pizza" />
                <h2>{pizza.title}</h2>
                <h4>{pizza.price} P</h4>
                <Link to="/">
                    <button className="button button-outline button-add">
                        <span>Назад</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FullPizza;
