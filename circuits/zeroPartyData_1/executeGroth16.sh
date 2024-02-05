#!/bin/bash
CIRCUIT_NAME=zeroPartyData_1
CONFIG_PTAU_VERSION=18

if [ -f ./ptau/powersOfTau28_hez_final_$CONFIG_PTAU_VERSION.ptau ]; then 
    echo "----- powersOfTau_hez_final_$CONFIG_PTAU_VERSION.ptau already exist -----"
else
    echo "----- Download powersOfTau_hez_final_$CONFIG_PTAU_VERSION.ptau -----"
    wget -P ./ptau https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_${CONFIG_PTAU_VERSION}.ptau
fi

echo "----- Comiple circuit -----"
# Compile circuit file to obtain webassembly directory and file .r1cs 
circom ${CIRCUIT_NAME}/${CIRCUIT_NAME}.circom --r1cs --wasm --sym

echo "----- Generate .zkey file -----"
# Generate a .zkey file that will contain the proving and verification keys together with all phase 2 contributions
node_modules/.bin/snarkjs groth16 setup ${CIRCUIT_NAME}.r1cs ptau/powersOfTau28_hez_final_${CONFIG_PTAU_VERSION}.ptau ${CIRCUIT_NAME}_0000.zkey
node_modules/.bin/snarkjs zkey contribute ${CIRCUIT_NAME}_0000.zkey ${CIRCUIT_NAME}_final.zkey --name="1st Contributor Name" -v -e="some random text"
