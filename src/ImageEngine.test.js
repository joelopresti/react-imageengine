import React from 'react'
import ReactDOM from 'react-dom'
import ImageEngine from './'

describe('ImageEngine should render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ImageEngine src='/img.jpg' />, div)
  })
})
