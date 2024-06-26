import { FC } from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: FC = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br />
                Ничего не найдено
                <p className={styles.description}>
                    К сожалению данная страница отсутствует в нашем
                    интернет-магазине
                </p>
            </h1>
        </div>
    );
};

export default NotFoundBlock;
