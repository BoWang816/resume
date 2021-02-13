/**
 * index.js
 * @author wangbo
 * @since 2021/2/13
 */
import styles from './style.module.less';

export default function CommonModule(props) {
    const {id, title, children} = props;
    return (
        <div className={styles.commonSection} id={id}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.cardContent}>
                {children}
            </div>
        </div>
    )
}
