const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 4,
    notation: "compact",
    compactDisplay: "short",
  });
  
  export const formatCurrency = (value: number): string => {
    return CURRENCY_FORMATTER.format(value);
  };
  
  const NUMBER_FORMATTER = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
  
  export const formatNumber = (value: number): string => {
    return NUMBER_FORMATTER.format(value);
  };
  