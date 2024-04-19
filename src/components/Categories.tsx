import { FC } from 'react';

type CategoriesProps = {
    value: number;
    onChangeCategory: (i: number) => void;
    getCategories?: (categories: string[]) => void;
};

const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
];

const Categories: FC<CategoriesProps> = ({
    value,
    getCategories,
    onChangeCategory,
}) => {
    getCategories?.(categories);

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (
                    <li
                        onClick={() => onChangeCategory(i)}
                        className={value === i ? 'active' : ''}
                        key={i}
                    >
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
