export interface CryptoQuote {
  price: number;
  volume_change_24h: number;
}

export interface CryptoDataProps {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  quote: {
    USD: CryptoQuote;
  };
}
