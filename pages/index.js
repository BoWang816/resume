import Layout from '../components/layout';
import Info from "../components/info";
import Evaluate from "../components/evaluate";
import Project from "../components/project";
import Skill from "../components/skill";
import Work from "../components/work";
import styles from './app.module.less';

export default function Home() {
  return (
      <Layout>
          <Info/>
          <section className={styles.mainWrap}>
              <Work/>
              <Project/>
              <Skill/>
              <Evaluate/>
          </section>
      </Layout>
  )
}
