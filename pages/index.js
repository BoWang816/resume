import Layout from '../components/layout';
import Info from "../components/info";
import Evaluate from "../components/evaluate";
import Project from "../components/project";
import Skill from "../components/skill";
import Work from "../components/work";
import Education from "../components/education";
import styles from './app.module.less';

export default function Home() {
  return (
      <Layout>
          <Info/>
          <section className={styles.mainWrap}>
              <Work/>
              <Education/>
              <Project/>
              <Skill/>
              <Evaluate/>
          </section>
          <a href="#top" className={styles.top}>
              ^
          </a>
      </Layout>
  )
}
