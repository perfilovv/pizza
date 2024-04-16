import { useContext, useEffect, useRef } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const inputRef: any = useRef();

    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    useEffect(() => {
        console.log();
    }, []);

    return (
        <div className={styles.root}>
            <IoSearchOutline className={styles.icon} />
            <input
                ref={inputRef}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className={styles.input}
                placeholder="Поиск пиццы..."
            />
            {searchValue && (
                <IoCloseOutline
                    onClick={onClickClear}
                    className={styles.clearIcon}
                />
            )}
        </div>
    );
};

export default Search;
