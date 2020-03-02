const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || typeof sampleActivity !== 'string' || /[^\d.]/.test(sampleActivity)) return false
  sampleActivity = parseFloat(sampleActivity)
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD))

};
