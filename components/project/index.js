/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './index.module.less';
import CommonModule from "../module";

export default function Project() {
    const title = '项目经历';
    const id = 'project';
    return (
        <CommonModule id={id} title={title}>
            <ul className={styles.projectFilter}>
                <li className={styles.active} data-filter="*">All</li>
                <li className="type" data-filter=".backend">Back-end</li>
                <li className="type" data-filter=".frontend">Front-end</li>
            </ul>

            <div className={styles.projectWrap}>
                <div className={styles.projectItem}>
                    <a href="#">
                        <div className={styles.itemInner}>
                            <div className={styles.content}>
                                <h3 className={styles.subTitle}>
                                    Project Lorem Ipsum
                                </h3>
                                <div className={styles.meta}>AngularJS</div>
                                <div className={styles.projectDesc}>
                                    这里会是项目项目的描述
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles.projectItem}>
                    <a href="#">
                        <div className={styles.itemInner}>
                            <div className={styles.content}>
                                <h3 className={styles.subTitle}>
                                    Project Lorem Ipsum
                                </h3>
                                <div className={styles.meta}>AngularJS</div>
                                <div className={styles.projectDesc}>
                                    这里会是项目项目的描述
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles.projectItem}>
                    <a href="#">
                        <div className={styles.itemInner}>
                            <div className={styles.content}>
                                <h3 className={styles.subTitle}>
                                    Project Lorem Ipsum
                                </h3>
                                <div className={styles.meta}>AngularJS</div>
                                <div className={styles.projectDesc}>
                                    这里会是项目项目的描述
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles.projectItem}>
                    <a href="#">
                        <div className={styles.itemInner}>
                            <div className={styles.content}>
                                <h3 className={styles.subTitle}>
                                    Project Lorem Ipsum
                                </h3>
                                <div className={styles.meta}>AngularJS</div>
                                <div className={styles.projectDesc}>
                                    这里会是项目项目的描述
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </CommonModule>
    )
}
