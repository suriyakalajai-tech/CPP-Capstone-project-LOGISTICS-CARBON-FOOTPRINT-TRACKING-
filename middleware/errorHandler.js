module.exports = (err, req, res, next) => {
  console.error('[LOGIFLOW SERVER ERROR]:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
};