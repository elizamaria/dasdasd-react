import React from 'react'

import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Page - dasdasd</title>
        <meta property="og:title" content="Page - dasdasd" />
      </Helmet>
      <AppComponent></AppComponent>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1618692526479-be59c699eae8?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
        className={styles.image}
      />
    </div>
  )
}

export default Page
