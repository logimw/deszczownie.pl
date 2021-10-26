const size = {
  xxs: "426px",
  xs: "480px",
  sm: "768px",
  m: "993px",
  lg: "1200px",
};
const device = {
  xxs: `(max-width: ${size.xxs})`,
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  m: `(max-width: ${size.m})`,
  lg: `(max-width: ${size.lg})`,
};
export default { size, device };
