import { FC, useState } from 'react';

const Categories: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ];

    function changeIndex(index: number) {
        setActiveIndex(index);
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                    <li
                        onClick={() => changeIndex(i)}
                        className={activeIndex === i ? 'active' : ''}
                        key={i}
                    >
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
