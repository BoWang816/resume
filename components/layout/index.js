/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import Head from 'next/head';
import styles from './layout.module.less';

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>简历 | 恪晨</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="https://resume.wangboweb.site"/>
            </Head>
            <div className={styles.topBar}>
                <a className={styles.downloadBtn} href="#"><i className="fa fa-download" aria-hidden="true"></i> Download My Resume</a>
            </div>
            <main>{children}</main>
        </div>
    );
}
