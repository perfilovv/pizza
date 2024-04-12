import { useContext } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    return (
        <div className={styles.root}>
            <IoSearchOutline className={styles.icon} />
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className={styles.input}
                placeholder="Поиск пиццы..."
            />
            {searchValue && (
                <IoCloseOutline
                    onClick={() => setSearchValue('')}
                    className={styles.clearIcon}
                />
            )}
        </div>
    );
};

export default Search;
