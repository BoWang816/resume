/**
 * index.js
 * @author wangbo
 * @since 2021/1/14
 */
import Head from 'next/head';
import styles from './index.module.less';
import Nav from "../nav";

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>简历 | 恪晨</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="https://resume.wangboweb.site"/>
            </Head>

            <main className={styles.mainWrap} id="info">
                <Nav/>
                {children}
            </main>

            <footer className={styles.footer}>
                恪晨的博客，托管于Vercel
                <br/>
                ©CopyRight {new Date().getFullYear()} - {new Date().getFullYear() + 1} By Bo.Wang
            </footer>
        </div>
    );
}
