/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './index.module.less';

export default function Education() {
    return (
        <div className={styles.educationArea} id="education">
            <h2 className={styles.title}>教育经历</h2>
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
        </div>
    )
}
