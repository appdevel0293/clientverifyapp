
import './App.css';
import io from 'socket.io-client';
import React, { useEffect } from 'react';


function App() {



  const ENDPOINT = "https://nodenftpassserver.onrender.com:10000";


  useEffect(() => {

    const socket = io(ENDPOINT);
    console.log("trying" )
   
    socket.on('serverEvent', (data) => {
      console.log('Received message from server:', data);
    });

    socket.emit("check", { data: 'Hello, server!' });



    return () => {
      socket.disconnect();
    };
  }, []);

  var clientAccount = null;

  var phantomProviderEVM = null;
  const quicknodeRPCConfig = {
    chainId: '0x13881',
    chainName: 'Polygon',
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    nativeCurrency: {symbol: 'MATIC', decimals: 18},
    rpcUrls: ['https://red-multi-valley.matic-testnet.discover.quiknode.pro/61b21728fa928158390362bfe247eab7ee8c68e7/'],
  };
  const isPhantomInstalled = window?.phantom?.ethereum?.isPhantom;



  const getProvider = async () => {
    
    //if phantom wallet exist
    if (isPhantomInstalled) {
      
      const anyWindow = window;
      const provider = anyWindow.phantom?.ethereum;
      
     
      if (provider) {
         provider.request({
          method: 'eth_requestAccounts'
        }).then((accounts) => {
          
          //get account to Mint and Send NFT
          clientAccount = accounts[0];
          const socket = io(ENDPOINT);
          console.log("emmiting" )
          console.log(clientAccount)
          socket.emit("check", clientAccount);

          // Permission granted, switch the network to Polygon Mumbai
          provider.request({
            method: 'wallet_switchEthereumChain',
            params: [quicknodeRPCConfig]
          }).then(() => {
            
            //send log to verify account and provider
            console.log(clientAccount);
            console.log(provider);

            if(phantomProviderEVM===null){
              phantomProviderEVM = provider;
             // web3 = new Web3(phantomProviderEVM);
              console.log("asignProvider",phantomProviderEVM);
            }
            
            // return the provider
            //return provider;

          }).catch((error) => {
            console.error(error);
          });

        }).catch((error) => {
          console.error(error);
        });
      }
    }else{

      //if phantom wallet not installed, redirect to official website
      window.open('https://phantom.app/', '_blank');
    
    }  


  getProvider();


    
  };

  
  return (
    <div className="App">
      <header className="App-header">
  
        <p>
          
        </p>
       
      </header>
    </div>
  );
}

export default App;
