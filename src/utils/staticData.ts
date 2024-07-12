import { CryptoDataProps } from "@/types";

export const staticData: CryptoDataProps[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    quote: {
      USD: {
        price: 30000,
        volume_change_24h: 2.5,
      },
    },
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    slug: "ethereum",
    quote: {
      USD: {
        price: 2000,
        volume_change_24h: -1.2,
      },
    },
  },
  {
    id: 3,
    name: "Avalanche",
    symbol: "AVAX",
    slug: "avalanche",
    quote: {
      USD: {
        price: 15,
        volume_change_24h: 3.0,
      },
    },
  },
  {
    id: 4,
    name: "Polygon",
    symbol: "MATIC",
    slug: "polygon",
    quote: {
      USD: {
        price: 1.2,
        volume_change_24h: 0.5,
      },
    },
  },
  {
    id: 5,
    name: "Chainlink",
    symbol: "LINK",
    slug: "chainlink",
    quote: {
      USD: {
        price: 25,
        volume_change_24h: 1.1,
      },
    },
  },
  {
    id: 6,
    name: "TRON",
    symbol: "TRX",
    slug: "tron",
    quote: {
      USD: {
        price: 0.07,
        volume_change_24h: -0.8,
      },
    },
  },
];
