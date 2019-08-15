import buildUrl from './buildUrl'

test('buildURL Method', () => {
  const value = buildUrl('/images.jpg', { width: '500', height: '500' })
  expect(value).toMatch('/images.jpg?imgeng=w_500/h_500')
})
