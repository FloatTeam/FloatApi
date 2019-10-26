const router = require('express').Router()

module.exports = router

// Here is where we import our routes for different segments of the api.
// We'll define these better as we learn the project requirements.

/**
 * healthcheck for the API
 */
router.use('/healthcheck', require('./healthcheck'))

/**
 * 404's. Nothing fancy needed for an API
 */
router.use((req, res, next) => { res.sendStatus(404) })

/**
 * ERRORS
 * This middleware handles errors.
 * When we encounter an error in the API, we should pass next with the err object, it should include a message so we know where we went wrong.
 */
router.use((err, req, res, next) => {
  console.error(err)
  return res.status(500).json({
    error: true,
    message: err.message
  })
})
