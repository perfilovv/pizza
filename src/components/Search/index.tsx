import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice';

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 150),
        []
    );

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
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
