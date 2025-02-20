import { groth16 } from "snarkjs";

export async function exportVerifierCalldata(_workType, _age, _income, _workTypeEligible, _ageEligible, _incomeEligible, wasmPath, zkeyPath) {

  const input = {
    workType: _workType,
    age: _age,
    income: _income,
    workTypeEligible: _workTypeEligible,
    ageEligible: _ageEligible,
    incomeEligible: _incomeEligible
  };

  try {
    
    const { proof: _proof, publicSignals: _publicSignals } =
      await groth16.fullProve(input, wasmPath, zkeyPath);
  
    const calldata = await groth16.exportSolidityCallData(_proof, _publicSignals);
  
    const argv = calldata
      .replace(/["[\]\s]/g, "")
      .split(",")
      .map((x) => BigInt(x).toString());
  
    const a = [argv[0], argv[1]];
    const b = [
      [argv[2], argv[3]],
      [argv[4], argv[5]],
    ];
    const c = [argv[6], argv[7]];
    const Input = [];
  
    for (let i = 8; i < argv.length; i++) {
      Input.push(argv[i]);
    }
  
    return { a, b, c, Input };

  } catch (error) {
       window.alert("You are not eligible for offer. Not sending your proof to Verifier");
  }
}
