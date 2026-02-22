// ==============================|| GLASS EFFECT HELPER ||============================== //

// Base color matches common.white (#fafcff) in rgba form
const BASE_R = 250;
const BASE_G = 252;
const BASE_B = 255;

const presets = {
  light: { alpha: 0.55, blur: 12, borderOpacity: 0.12 },
  medium: { alpha: 0.68, blur: 16, borderOpacity: 0.18 },
  strong: { alpha: 0.75, blur: 20, borderOpacity: 0.22 }
};

const glassEffect = ({ intensity = 'medium', border = true } = {}) => {
  const { alpha, blur, borderOpacity } = presets[intensity] || presets.medium;
  const bg = `rgba(${BASE_R}, ${BASE_G}, ${BASE_B}, ${alpha})`;
  const blurValue = `blur(${blur}px)`;

  return {
    backgroundColor: bg,
    backdropFilter: blurValue,
    WebkitBackdropFilter: blurValue,
    ...(border && {
      border: `1px solid rgba(255, 255, 255, ${borderOpacity})`
    })
  };
};

export default glassEffect;
