/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import styles from './index.module.less';
import {basicInfo} from "../../data";
import CommonModule from "../module";

export default function Info() {
    const {avatar, title, subTitle, detailInfo} = basicInfo;
    const {mobile, email, school, graduateTime, workTime, want, blog, github, juejin} = detailInfo;
    return (
        <CommonModule>
            <div className={styles.intro}>
                <div className={styles.introInfo}>
                    <img className={styles.headerImage} src={avatar} alt=""/>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.profile}>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <ul className={styles.basicInfo}>
                    <li><span>手机：</span><a href={`tel:${mobile}`}>{mobile}</a></li>
                    <li><span>邮箱：</span><a href={`mailto:${email}`}>{email}</a></li>
                    <li><span>学校：</span><a href={school.href}>{school.title}</a></li>
                    <li><span>毕业时间：</span>{graduateTime}</li>
                    <li><span>工作经验：</span>{workTime}</li>
                    <li><span>求职意向：</span>{want}</li>
                    <li><span>博客：</span><a href={blog.href}>{blog.title}</a></li>
                    <li><span>Github：</span><a href={github.href}>{github.title}</a></li>
                    <li><span>掘金：</span><a href={juejin.href}>{juejin.title}</a></li>
                </ul>
            </div>
        </CommonModule>
    )
}
