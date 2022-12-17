import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutMe from '../components/aboutMe'
import Navbar from '../components/navbar'
import Description from '../components/description'
import Education from '../components/education'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/Contact'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <AboutMe />
          <Description />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
