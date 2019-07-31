import React, { Component } from 'react'

import ImageEngine from 'react-imageengine'

export default class App extends Component {
  render () {
    return (
      <div>
        <ImageEngine src='/images/imageengine-homepage.png' width={'500'} htmlAttributes={{alt:'ImageEngine image'}}/>
      </div>
    )
  }
}
