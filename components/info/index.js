/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './index.module.less';

export default function Info() {
    return (
        <div className={styles.infoBg}>
            <div className={styles.intro}>
                <div className={styles.introInfo}>
                    <img className={styles.headerImage} src="/images/profile.jpeg" alt=""/>
                    <div className={styles.title}>前端开发工程师</div>
                    <div className={styles.profile}>
                        <p>一个前端开发工程师，喜欢瞎搞搞，喜欢技术，喜欢代码</p>
                    </div>
                </div>
            </div>

            <div className={styles.contactInfo}>
                <ul className={styles.listInline}>
                    <li className="email">
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:someone@example.com">james.doe@website.com</a>
                    </li>
                    <li>
                        <i className="fa fa-phone"></i>
                        <a href="tel: 0123456789">0123 456 7890</a>
                    </li>
                    <li className="website">
                        <i className="fa fa-globe"></i>
                        <a href="#" target="_blank">portfoliosite.com</a>
                    </li>
                </ul>
            </div>

            <div className={styles.pageArea}>
                <ul id="page-nav" className="nav page-nav list-inline">
                    <li className=""><a className="scrollto" href="#experiences">工作经历</a></li>
                    <li className=""><a className="scrollto" href="#education">教育经历</a></li>
                    <li className=""><a className="scrollto" href="#project">个人项目</a></li>
                    <li className=""><a className="scrollto" href="#skill">个人技能</a></li>
                    <li className=""><a className="scrollto" href="#evaluate">个人评价</a></li>
                </ul>
            </div>
        </div>
    )
}
