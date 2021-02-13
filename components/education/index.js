/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './index.module.less';
import CommonModule from "../module";

export default function Education() {
    const title = '教育经历';
    const id = 'education';
    return (
        <CommonModule id={id} title={title}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.itemTitle}>
                        <h3 className={styles.schoolName}>延安中学</h3>
                        <div className={styles.time}>2023-1212</div>
                    </div>
                    <div className={styles.desc}>
                        jaslfjlasjfasdjlfjlasjfajlkfjajfkjlkjflksjlfj
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.itemTitle}>
                        <h3 className={styles.schoolName}>西北农林科技大学</h3>
                        <div className={styles.time}>2023-1212</div>
                    </div>
                    <div className={styles.desc}>
                        jaslfjlasjfasdjlfjlasjfajlkfjajfkjlkjflksjlfj
                    </div>
                </li>
            </ul>
        </CommonModule>
    )
}
