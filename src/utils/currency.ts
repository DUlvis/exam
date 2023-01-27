export const calculatePrice = (price: number, coefficient: number) => {
  return Math.trunc(price * coefficient);
}
