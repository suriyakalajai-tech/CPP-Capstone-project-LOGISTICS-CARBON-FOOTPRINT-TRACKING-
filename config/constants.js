module.exports = {
  PORT: process.env.PORT || 5000,
  EMISSION_FACTORS: {
    // Emissions in kg CO2 per metric ton-km
    Road: { factor: 0.105, speed: 60 },
    Rail: { factor: 0.028, speed: 75 },
    Sea:  { factor: 0.012, speed: 30 },
    Air:  { factor: 0.600, speed: 750 }
  },
  DEFAULT_WEIGHTS: {
    alpha: 0.5,
    beta: 0.5
  }
};