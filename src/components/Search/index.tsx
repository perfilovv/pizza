import { useCallback, useContext, useRef, useState } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
    const [value, setValue] = useState('');
    const { setSearchValue } = useContext(SearchContext);
    const inputRef: any = useRef();

    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 250),
        []
    );

    const onChangeInput = (event: any) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={styles.root}>
            <IoSearchOutline className={styles.icon} />
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder="Поиск пиццы..."
            />
            {value && (
                <IoCloseOutline
                    onClick={onClickClear}
                    className={styles.clearIcon}
                />
            )}
        </div>
    );
};

export default Search;
