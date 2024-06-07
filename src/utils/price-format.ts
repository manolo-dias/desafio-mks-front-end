export const BRL = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
};