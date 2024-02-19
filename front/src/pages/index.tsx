import { useState } from "react";

export default function ZeroPartyData() {
    const [workType, setWorkType] = useState(0);
    const [age, setAge] = useState(0);
    const [income, setIncome] = useState(0);

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="mx-5 mb-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500 ">
                    Zero Party Data NFT Eligibility
                </div>
            </div>

            <div className="flex items-center justify-center mb-10">
                <label className="px-2">Work Type</label>
                <select
                    className="flex items-center justify-center px-5 py-3 space-x-3 text-lg text-white
                font-medium rounded-md bg-gradient-to-r from-sky-600 to-emerald-600
                bg-sky-600 bg-clip-padding bg-no-repeat
                hover:from-sky-500 hover:to-emerald-500"
                onChange={(e) => setWorkType(e.target.value)}
                >
                    <option value=""></option>
                    <option value="0">Business Owner</option>
                    <option value="1">Salaried Employee</option>
                </select>
            </div>

            <div className="flex items-center justify-center mb-10">
                <label className="px-2">Age</label>
                <input
                    type="text"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    w="100px"
                    className="flex items-center justify-center px-5 py-3 space-x-3 text-lg 
              font-medium rounded-md  bg-gradient-to-r from-sky-600 to-emerald-600
              hover:from-sky-500 hover:to-emerald-500"
              onChange={(e) => setAge(Number(e.target.value) ?? 0)}/>
            </div>

            <div className="flex  items-center justify-center mb-10">
                <label className="px-2">Income</label>
                <input
                    type="text"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    w="140px"
                    className="flex items-center justify-center px-5 py-3 space-x-3 text-lg 
                font-medium rounded-md bg-gradient-to-r from-sky-600 to-emerald-600
                hover:from-sky-500 hover:to-emerald-500"
                onChange={(e) => setIncome(Number(e.target.value) ?? 0)}/>
            </div>

            <div className="flex  items-center justify-center mb-10">
                <button
                    className="flex items-center justify-center px-5 py-3 space-x-3 text-lg
                    font-medium rounded-md bg-gradient-to-r from-sky-600 to-emerald-600 
                    hover:from-sky-500 hover:to-emerald-500"
                    onClick={() => {
                        console.log("workType => ", workType);
                        console.log("age => ", age);
                        console.log("income => ", income);
                    }}>Call Verify
                </button>
            </div>

        </div>
    )
}