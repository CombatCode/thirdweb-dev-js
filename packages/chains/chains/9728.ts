import type { Chain } from "../src/types";
export default {
  "name": "Boba BNB Testnet",
  "chain": "Boba BNB Testnet",
  "rpc": [
    "https://boba-bnb-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testnet.bnb.boba.network",
    "wss://wss.testnet.bnb.boba.network",
    "https://replica.testnet.bnb.boba.network",
    "wss://replica-wss.testnet.bnb.boba.network",
    "https://boba-bnb-testnet.gateway.tenderly.co",
    "wss://boba-bnb-testnet.gateway.tenderly.co"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "BobaBnbTestnet",
  "chainId": 9728,
  "networkId": 9728,
  "explorers": [
    {
      "name": "Boba BNB Testnet block explorer",
      "url": "https://blockexplorer.testnet.bnb.boba.network",
      "standard": "none"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-5",
    "bridges": [
      {
        "url": "https://gateway.boba.network"
      }
    ]
  },
  "testnet": true,
  "slug": "boba-bnb-testnet"
} as const satisfies Chain;