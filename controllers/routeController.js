const CarbonEngineService = require('../services/carbonEngineService');

exports.optimizeRoute = async (req, res, next) => {
  try {
    const { distance, weight, mode, alpha, beta } = req.body;

    if (mode) {
      const calculation = CarbonEngineService.calculateMetrics({ distance, weight, mode, alpha, beta });
      return res.status(200).json({ success: true, data: calculation });
    }

    const allEvaluations = CarbonEngineService.evaluateAllModes({ distance, weight, alpha, beta });
    res.status(200).json({ success: true, data: allEvaluations });
  } catch (err) {
    next(err);
  }
};