#!/bin/bash
CIRCUIT_NAME=zeroPartyData_1

if ! [ -f ./${CIRCUIT_NAME}_final.zkey ]; then 
    echo "----- ${CIRCUIT_NAME}_final.zkey does not exist -----"
    exit 1
fi

echo "----- generate Solidity Verifier -----"
node_modules/.bin/snarkjs zkey export solidityverifier ${CIRCUIT_NAME}_final.zkey ${CIRCUIT_NAME}Verifier.sol
