// ==============================|| GRADIENT PRESETS ||============================== //

// Colors derived from palette:
// primary[500] = #2d69f6, primary[600] = #5787f8
// primary[800] = #abc3fb, primary[900] = #d5e1fd
// common.white = #fafcff, grey[200] = #f0f0f0

const gradients = {
  // Multi-point blue mesh — for feature/content sections
  blueMesh: [
    'radial-gradient(ellipse at 20% 50%, rgba(213, 225, 253, 0.6) 0%, transparent 50%)',
    'radial-gradient(ellipse at 80% 20%, rgba(171, 195, 251, 0.4) 0%, transparent 40%)',
    'radial-gradient(ellipse at 60% 80%, rgba(213, 225, 253, 0.3) 0%, transparent 45%)'
  ].join(', '),

  // Soft grey radial — for alternating sections
  warmNeutral: [
    'radial-gradient(ellipse at 30% 40%, rgba(240, 240, 240, 0.7) 0%, transparent 50%)',
    'radial-gradient(ellipse at 70% 70%, rgba(250, 252, 255, 0.5) 0%, transparent 40%)'
  ].join(', '),

  // Stronger blue accents — for pricing/CTA sections
  deepBlue: [
    'radial-gradient(ellipse at 10% 80%, rgba(45, 105, 246, 0.08) 0%, transparent 50%)',
    'radial-gradient(ellipse at 90% 20%, rgba(171, 195, 251, 0.35) 0%, transparent 45%)',
    'radial-gradient(ellipse at 50% 50%, rgba(213, 225, 253, 0.25) 0%, transparent 60%)'
  ].join(', ')
};

const getGradient = (name) => gradients[name] || gradients.blueMesh;

export default getGradient;
