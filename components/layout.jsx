import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Layout.module.css';

const name ='fergolive'

export default function Layout({ children, title, description,home }){
    console.log(home)
    return (
        <div className={styles.container}>
            <Head>
            <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta name="descripcion" content={description}/>
            </Head>
            <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/fergolive.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/fergolive.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
            {/* <navbar>Nav bar</navbar> */}
            <nav>
              <Link href="/">
                <a>Inicio | </a>
              </Link>
              <Link href="/blog">
                <a>Blog | </a>
              </Link>
              <Link href="/contact">
                <a>Contacto | </a>
              </Link>
              <Link href="/about">
                <a>About </a>
              </Link>
            </nav>
            <main>  {children} </main>
        

        {/* <footer></footer> */}
            {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

        </div>
    )
}

Layout.defaultProps={
    title:"Fergolive | my web site",
    description:"Descripcion de mi sitio web"
}