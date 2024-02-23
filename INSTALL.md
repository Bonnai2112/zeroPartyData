# CIRCUITS
### Installing the circom ecosystem using Dockerfile
1. Go to circuits directory for installation de ZK developement circuits environnement

```
cd circuits
```
2. Install dependencies and circom  
- Create docker image for circuits developement by using Dockerfile.
- This Dockerfile together set up an environment for building a Docker image with Rust, Node.js, and other necessary dependencies. They update package lists, install required packages, and clean up unnecessary files to optimize the image size.
- It ensures that NVM is installed and set up correctly within the Docker container, allowing for easy management of Node.js versions during the container's runtime.
- To install from our sources, clone the circom repository
- Enter the circom directory and use the cargo build to compile

```
docker build -t circom-cr3 .  
```

3. Start and connect to circom developement container

```
docker run --rm -it -v $(pwd):/app -w /app circom-cr3 sh
```

4. Installing snarkjs  
snarkjs is a npm package that contains code to generate and validate ZK proofs from the artifacts produced by circom
```
. /root/.nvm/nvm.sh \
&& nmv install 19 \
&& npm install -g snarkjs
```

5. Compiling circuit zeroPartyData_1.circom  
Compile circuit, generate the witness and generate a .zkey file that will contain the proving and verification keys together with all phase 2 contributions. The set of inputs, intermediate signals and output is called witness. 
```
. circuits/zeroPartyData_1/executeGroth16.sh
```
After compiling the circuit and running the witness zeroPartyData with an appropriate input, we will have a file with extension .wtns that contains all the computed signals and, a file with extension .r1cs that contains the constraints describing the circuit. Both files will be used by the frontend to create the proofs of inputs.  

We are going to use the Groth16 zk-SNARK protocol. To use this protocol, you will need to generate a trusted setup. Groth16 requires a per circuit trusted setup.

Finally generate the Solidity code zeroPartyDataVerifier.sol   



# SMART CONTRACTS
```
├── src
│   ├── zeroPartyData.sol
│   └── zeroPartyDataVerifier.sol
```

zeroPartyData.sol contract manage eligibility state variable of by account and depends on `zeroPartyDataVerifier.sol` 
zeroPartyDataVerifier.sol permits verify the zk proof from frontend imputs  

1. Launch and connect to foundry and hardhat dev environnement using contracts/Dockerfile
```
cd contracts \
&& docker build -t foundry-hardhat .
&& docker run --rm -it -v $(pwd)/contracts:/contracts -w /contracts foundry-hardhat sh
```
2. Compile the smart contracts with foundry forge
```
forge build
```
3. Deploy and verify the smart contracts
```
. contracts/script/deployAndVerify.sh
```

# Frontend
launch the UI with this command :
```
yarn dev
```