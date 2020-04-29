import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // Required
});

//  Enable session (triggers QR Code modal)
await provider.enable();

//  Create Web3
const web3 = new Web3(provider);

// Subscribe to accounts change
provider.on("accountsChanged", (accounts) => {
    console.log(accounts);
});

// Subscribe to chainId change
provider.on("chainChanged", (chainId) => {
    console.log(chainId);
});

// Subscribe to networkId change
provider.on("networkChanged", (networkId) => {
    console.log(networkId);
});

// Subscribe to session connection/open
provider.on("open", () => {
    console.log("open");
});

// Subscribe to session disconnection/close
provider.on("close", (code, reason) => {
    console.log(code, reason);
});

// Send JSON RPC requests
const result = await provider.send(method: string, params?: any[]);

// Close provider session
await provider.close()

//  Get Accounts
const accounts = await web3.eth.getAccounts();

//  Get Chain ID
const chainId = await web3.eth.chainId();

//  Get Network ID
const networkId = await web3.eth.net.getId();

// Send Transaction
const txHash = await web3.eth.sendTransaction(tx);

// Sign Transaction
const signedTx = await web3.eth.signTransaction(tx);

// Sign Message
const signedMessage = await web3.eth.sign(msg);

// Sign Typed Data
const signedTypedData = await web3.eth.signTypedData(msg);