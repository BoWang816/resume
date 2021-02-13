/**
 * index.js
 * @author wangbo
 * @since 2021/2/13
 */
import styles from './style.module.less';
export default function TopBar() {
    return (
        <div className={styles.topBar}>
            <span className={styles.updateTime}>最后更新时间: 2021-01-22 12:21:32</span>
            <a className={styles.downloadBtn} href="#"><i className="iconfont icon-browse_fill"></i>下载简历</a>
        </div>
    );
}
