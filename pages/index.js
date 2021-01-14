import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Info from "../components/info";
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
          <Head>
              <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
              <Info/>
              <p>[Your Self Introduction]</p>
              <p>
                  (This is a sample website - you’ll be building a site like this on{' '}
                  <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
              </p>
              <Link href="/posts/resume">
                  <a>Go Resume</a>
              </Link>
          </section>
      </Layout>
  )
}
