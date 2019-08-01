// See https://docs.scientiamobile.com/documentation/ImageEngine/index#directives for reference.
const DIRECTIVES = Object.freeze({
  width: 'w', // This also includes auto
  height: 'h',
  compression: 'cmpr',
  format: 'f',
  fitMethod: 'm',
  passThrough: 'pass',
  sharpness: 's',
  rotate: 'r',
  percentageOfScreen: 'pc',
  crop: 'cr',
  inline: 'in',
  stripExifData: 'meta'
});

function buildUrl(src, options) {
  if (!src) {
    return ''
  }
  const keys = Object.keys(options)
  const keysLength = keys.length
  let url = `${src}?imgeng=`
  for (let i = 0; i < keysLength; i += 1) {
    const key = keys[i]
    const val = options[key]

    if (DIRECTIVES[key] && val !== undefined) {
      url += `${DIRECTIVES[key]}_${val}/`
    }
  }

  return url
}

function buildSrcsetUrl(srcset, domain) {
  let set = ''
  for (let source = 0; source < srcset.length; source += 1) {
    const url = `${domain}${buildUrl(source.src, source.options)} ${source.srcsetWidth}`
    set = set.concat(', ', url)
  }
  return set
}

export default buildUrl

export { buildSrcsetUrl }
