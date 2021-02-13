/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './index.module.less';
import CommonModule from "../module";

export default function Info() {
    return (
        <CommonModule>
            <div className={styles.intro}>
                <div className={styles.introInfo}>
                    <img className={styles.headerImage} src="/images/profile.jpeg" alt=""/>
                    <div className={styles.title}>前端开发工程师</div>
                    <div className={styles.profile}>
                        <p>一个前端开发工程师，喜欢瞎搞搞，喜欢技术，喜欢代码</p>
                    </div>
                </div>
                <ul className={styles.basicInfo}>
                    <li><span>手机：</span><a href="tel:18392012385">18392012385</a></li>
                    <li><span>邮箱：</span><a href="mailto:bo.wang1016@outlook.com">bo.wang1016@outlook.com</a></li>
                    <li><span>学校：</span><a href="https://www.nwsuaf.edu.cn/">西北农林科技大学(985、211)</a></li>
                    <li><span>毕业时间：</span>2018-07</li>
                    <li><span>工作经验：</span>3年</li>
                    <li><span>求职意向：</span>西安 16K～20K</li>
                    <li><span>博客：</span><a href="https://blog.wangboweb.site">https://blog.wangboweb.site</a></li>
                    <li><span>Github：</span><a href="https://github.com/BoWang816">恪晨</a></li>
                    <li><span>掘金：</span><a href="https://juejin.cn/user/2049145403882430">恪晨</a></li>
                </ul>
            </div>
        </CommonModule>
    )
}
