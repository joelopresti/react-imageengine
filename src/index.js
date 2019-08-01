/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import buildUrl from './buildUrl'

export default class ImageEngine extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    srcset: PropTypes.string,
    sizes: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    compression: PropTypes.number,
    format: PropTypes.string,
    fitMethod: PropTypes.string,
    passThrough: PropTypes.bool,
    sharpness: PropTypes.number,
    rotate: PropTypes.number,
    percentageOfScreen: PropTypes.number,
    crop: PropTypes.string,
    inline: PropTypes.bool,
    stripExifData: PropTypes.bool,
    htmlAttributes: PropTypes.object
  }

  render() {
    const {
      src,
      srcset,
      sizes,
      width,
      height,
      compression,
      format,
      fitMethod,
      passThrough,
      sharpness,
      rotate,
      percentageOfScreen,
      crop,
      inline,
      stripExifData,
      htmlAttributes
    } = this.props

    const options = {
      width,
      height,
      compression,
      format,
      fitMethod,
      passThrough,
      sharpness,
      rotate,
      percentageOfScreen,
      crop,
      inline,
      stripExifData
    }

    const domain = process.env.REACT_APP_IE_DOMAIN
    const secure = process.env.REACT_APP_IE_SSL ? 'https://' : 'http://'
    const imgSrc = buildUrl(src, options)
    const renderUrl = secure + domain + imgSrc

    if (!src) {
      // eslint-disable-next-line jsx-a11y/alt-text
      return (<img src='' {...htmlAttributes} />)
    }
    return (<img src={renderUrl} srcSet={srcset} sizes={sizes} {...htmlAttributes} />)
  }
}

// export class Picture extends Component {
// render() {
//   <picture>

//   </picture>
// }
// }
