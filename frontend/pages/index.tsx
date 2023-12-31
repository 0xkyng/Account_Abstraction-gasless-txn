import {  ConnectWallet, Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import {abi} from "../constants/abi";
import {deployedAddresses} from "../constants/address";
import { useState } from "react";

const Home: NextPage = () => {
   const { contract } = useContract(deployedAddresses);
   const [lastUser, setLastUser] = useState("")
   const { data, isLoading, error } = useContractRead(
     contract,
     "showLastUser",
     [],
   );

  // Read contract with arguments

  const getAddr = () => {
    if (error) {
      console.error("failed to read contract", error);
    }
    console.log(data)
    setLastUser(data)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.connect}>
            <ConnectWallet
             switchToActiveChain={true}
              dropdownPosition={{
                side: "bottom",
                align: "center",
              
              }}
            />
          </div>

        <div className={styles.header}>
          <h1 className={styles.title}>
            Explore {" "}
            <span className={styles.gradientText0}>
                gasless transactions.
            </span>
          </h1>

          <span className={styles.last}>Last User Address: {lastUser}</span>

          
        </div>

        <div className={styles.functions}>
        <Web3Button contractAddress = {deployedAddresses} contractAbi={abi} action={(contract) => contract.call("setNumber", [5])}>setNumber</Web3Button>

        <Web3Button contractAddress = {deployedAddresses} action={(contract) => contract.call("increment")}>increment</Web3Button>

        <Web3Button contractAddress = {deployedAddresses} action={(contract) => contract.call("decrement")}>decrement</Web3Button>

        <button className={styles.button} onClick={getAddr}>show LastUser</button>

        </div>




        
      </div>
    </main>
  );
};

export default Home;