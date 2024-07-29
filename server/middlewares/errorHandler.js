/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 400

  console.error(err.stack)

  res.status(statusCode).json({
    status: 'error',
    statusCode: statusCode,
    message: err.message || 'Internal Server Error'
  })
}

export default errorHandler
