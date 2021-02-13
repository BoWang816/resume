/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './index.module.less';
import CommonModule from "../module";

export default function Work() {
    const title = '工作经历';
    const id = 'work';
    return (
        <CommonModule id={id} title={title}>
            <div className={styles.timeLine}>
                <div className={styles.item}>
                    <div className={styles.workPlace}>
                        <h3 className={styles.place}>杭州数云信息技术</h3>
                        <div className={styles.location}>
                            陕西西安
                        </div>
                    </div>
                    <div className={styles.jobMeta}>
                        <div className={styles.metaTitle}>Senior Software Engineer</div>
                        <div className={styles.metaTime}>2019-2021</div>
                    </div>
                    <div className={styles.jobDesc}>
                        <p>一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述</p>
                        <ul>
                            <li>一些事项</li>
                            <li>一些事项</li>
                            <li>一些事项</li>
                            <li>一些事项</li>
                            <li>一些事项</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.workPlace}>
                        <h3 className={styles.place}>等待中...</h3>
                        <div className={styles.location}>
                            西安
                        </div>
                    </div>
                </div>
            </div>
        </CommonModule>
    )
}
