import type { Chain } from "../src/types";
export default {
  "name": "Harmony Testnet Shard 1",
  "chain": "Harmony",
  "rpc": [
    "https://harmony-testnet-shard-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://api.s1.b.hmny.io"
  ],
  "faucets": [
    "https://faucet.pops.one"
  ],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s1",
  "chainId": 1666700001,
  "networkId": 1666700001,
  "explorers": [
    {
      "name": "Harmony Block Explorer",
      "url": "https://explorer.testnet.harmony.one",
      "standard": "none"
    }
  ],
  "testnet": true,
  "slug": "harmony-testnet-shard-1"
} as const satisfies Chain;