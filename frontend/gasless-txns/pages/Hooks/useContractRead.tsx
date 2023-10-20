import { useContractRead, useContract, Web3Button } from "@thirdweb-dev/react";
import {deployedAddresses} from "../../pages/address";

// Your smart contract address


export default function App() {
  const { contract } = useContract(deployedAddresses);

  // Read contract with arguments
  const { data, isLoading, error } = useContractRead(
    contract,
    "showAddress",
    [],
  );

  if (error) {
    console.error("failed to read contract", error);
  }

  return (
    // <div>{isLoading ? <p>Loading...</p> : <p>The Last Addreess: {data}</p>}</div>
    data
  );
}