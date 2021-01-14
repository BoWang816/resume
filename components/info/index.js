/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './info.module.less';

export default function Info({ children }) {
    return (
        <div className={styles.infoBg}>
            {children}
        </div>
    )
}
