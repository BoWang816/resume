/**
 * resume.js
 * @author wangbo
 * @since 2021/1/14
 */
import Head from "next/head";
import Layout from '../../components/layout';
import Info from "../../components/info";

export default function Resume() {
    return (
        <Layout>
            <Head>
                <title>resume</title>
            </Head>

            <h1>Resume Page</h1>
            <section>
                <Info>
                    hello, 我是info组件
                </Info>
            </section>
        </Layout>
    )
}
