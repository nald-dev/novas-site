import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import CAREERS from '../constants/careers'
import SKILLS from '../constants/skills'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reynald Prabha Nova</title>
        <meta name="description" content="Reynald Prabha Nova's Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.introduction}>
          <div className={styles.photoContainer}>
            <Image  className={styles.photo} src="/images/novas-photo.jpg" alt="me" width="200" height="200" />
          </div>

          <h1 className={styles.title}>
            Hi, I am

            <br />

            <div className={styles.titleName}>
              Reynald Prabha Nova
            </div>
          </h1>
        </section>

        <section className={styles.section}>
          <h1>
            Career History
          </h1>

          <div
            className={styles.careersContainer}
          >
            {
              CAREERS.map(({ name, timeRange, position, isPresent, number }) => {
                const careerContainerStyle = isPresent ? styles.presentCareerContainer : styles.careerContainer

                return (
                  <div
                    key={number}
                    className={careerContainerStyle}
                  >
                    {number}

                    <div
                      className={styles.careerNameLabel}
                    >
                      {name}
                    </div>

                    <div
                      className={styles.careerTimeRangeLabel}
                    >
                      {timeRange}
                    </div>

                    <div
                      className={styles.careerPositionLabel}
                    >
                      {position}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>

        <section className={styles.section}>
          <h1>
            {"Tools I've Worked With"}
          </h1>

          <div
            className={styles.skillsContainer}
          >
            {
              SKILLS.map(skill => {
                return (
                  <div
                    key = {skill}
                    className = {styles.skill}
                  >
                    {skill}
                  </div>
                )
              })
            }
          </div>
        </section>

        <section className={styles.section}>
          <h1>
            Contact
          </h1>
        </section>
      </main>
    </>
  )
}

export default Home
