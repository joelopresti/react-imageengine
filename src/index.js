/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import buildUrl from './buildUrl'

export default class ImageEngine extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    srcset: PropTypes.string,
    sizes: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    compression: PropTypes.string,
    format: PropTypes.string,
    fitMethod: PropTypes.string,
    passThrough: PropTypes.bool,
    sharpness: PropTypes.string,
    rotate: PropTypes.string,
    percentageOfScreen: PropTypes.string,
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

export class Picture extends Component {
  static propTypes = {
    htmlAttributes: PropTypes.object,
    children: PropTypes.node

  }
  render() { 
    const { htmlAttributes, children } = this.props
    return (
      <picture {...htmlAttributes}>{children}</picture>
    )
  }
}

export class Source extends Component {
  static propTypes = {
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string,
    media: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    compression: PropTypes.string,
    format: PropTypes.string,
    fitMethod: PropTypes.string,
    passThrough: PropTypes.bool,
    sharpness: PropTypes.string,
    rotate: PropTypes.string,
    percentageOfScreen: PropTypes.string,
    crop: PropTypes.string,
    inline: PropTypes.bool,
    stripExifData: PropTypes.bool,
    htmlAttributes: PropTypes.object
  }

  render() {
    const {
      srcSet,
      sizes,
      media,
      type,
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
    const imgSrc = buildUrl(srcSet, options)
    const renderUrl = secure + domain + imgSrc

    if (!srcSet) {
    // eslint-disable-next-line jsx-a11y/alt-text
      return (<source srcSet='' {...htmlAttributes} />)
    }
    return (<source srcSet={renderUrl} media={media} type={type} sizes={sizes} {...htmlAttributes} />)
  }
}
