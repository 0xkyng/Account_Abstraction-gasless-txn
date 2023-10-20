import { useContract } from "@thirdweb-dev/react";
import {deployedAddresses} from "../../pages/address";
import {abi} from "../../pages/abi";

const { contract, isLoading, error } = useContract(
  deployedAddresses,
//   {abi},
);