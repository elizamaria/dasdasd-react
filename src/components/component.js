import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.container}>
      <img alt={props.image_alt} src={props.image_src} className={styles.image} />
    </div>
  )
}

AppComponent.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000',
}

AppComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default AppComponent
