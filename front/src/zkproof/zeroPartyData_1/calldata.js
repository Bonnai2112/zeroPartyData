import { exportCallDataGroth16 } from "../snarkjs";

export async function zpdCalldata(_workType, _age, _income, _workTypeEligible, _ageEligible, _incomeEligible) {
    const input = {
      workType: _workType,
      age: _age,
      income: _income,
      workTypeEligible: _workTypeEligible,
      ageEligible: _ageEligible,
      incomeEligible: _incomeEligible
    };
  
    let dataResult;
  
    try {
      dataResult = await exportCallDataGroth16(
        input,
        "/zkproof/zeroPartyData_1.wasm",
        "/zkproof/zeroPartyData_1_final.zkey"
      );
    } catch (error) {
      window.alert("You are not eligible for offer. Not sending your proof to Verifier");
    }
  
    return dataResult;
  }