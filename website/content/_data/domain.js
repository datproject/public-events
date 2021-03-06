module.exports = () => {
  let url = process.env.DEPLOY_PRIME_URL || process.env.URL || 'http://localhost:8080'
  if (process.env.CONTEXT === 'production') {
    url = 'https://events.dat.foundation'
  }
  /*
  Maybe doesn't work as expected?
  let image = process.env.NETLIFY_IMAGES_CDN_DOMAIN
  if (image) {
    image = `https://${image}`
  } else {
    image = url
  }
  */
  return { url, image: url }
}
