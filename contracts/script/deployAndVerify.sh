#!bin/bash

forge create src/ZeroPartyDataVerifier.sol:ZeropartyDataVerifier \
    --rpc-url "https://polygon-mumbai-bor.publicnode.com" \
    --private-key "128e1176d3d0ed8996e3ceca5fec48de0ac08c10aff273e929f95e5feef752ad" \
    --etherscan-api-key "KYJRME2CUZEQJ1AND7WE5JX7DNYBKBXGGU" \
    --verify
