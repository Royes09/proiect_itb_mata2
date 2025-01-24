import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import SuiWallet from "./components/SuiWallet";
// import Contract from "./components/Contract";
import Wallet from "./components/Wallet";
import "./styles.css"; // Importăm CSS-ul pentru stilizare

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [direction, setDirection] = useState<"MetaMaskToSui" | "SuiToMetaMask">(
    "MetaMaskToSui"
  );

  const handleTransfer = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount to transfer.");
      return;
    }

    if (direction === "MetaMaskToSui") {
      console.log(`Transferring ${amount} tokens from MetaMask to Sui`);
    } else {
      console.log(`Transferring ${amount} tokens from Sui to MetaMask`);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider>
        <WalletProvider autoConnect>
          <div className="container">
            <h1>Ethereum & Sui dApp</h1>
            <div className="wallet-buttons">
              <Wallet />
              <SuiWallet />
            </div>

            {/* Input pentru sumă */}
            <div className="transfer-controls">
              <label>
                Enter amount to transfer:
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0"
                />
              </label>
            </div>

            {/* Selectare direcție transfer */}
            <div className="transfer-buttons">
              <button
                onClick={() => setDirection("MetaMaskToSui")}
                style={{
                  backgroundColor:
                    direction === "MetaMaskToSui" ? "blue" : "lightgray",
                  color: "white",
                }}
              >
                MetaMask → Sui
              </button>
              <button
                onClick={() => setDirection("SuiToMetaMask")}
                style={{
                  backgroundColor:
                    direction === "SuiToMetaMask" ? "blue" : "lightgray",
                  color: "white",
                }}
              >
                Sui → MetaMask
              </button>
            </div>

            {/* Buton de transfer */}
            <button className="transfer-button" onClick={handleTransfer}>
              Transfer
            </button>
          </div>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default App;
