import React from 'react';
import Input from "./components/Input";
import logo from './assets/logo.svg';
import Button from "./components/Button";
function App() { 
  return (
    <div className="flex flex-col min-h-screen w-full h-full items-center justify-center gap-3">
     
    <img src={logo} alt="InteliBlockchain" className="w-1/3 mb-4"/>
     
      <div className="rounded-lg w-5/6 xl:w-1/3 bg-blue-900 text-white px-3 py-5">

        <p>
          Receba sua Proof-Of-Attandence NFT
        </p>

        <p className="text-gray-200">
          Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.
        </p>
        <p className="text-gray-200">
          Ainda não tem uma carteira? Acesse o link e cria a sua já: {""}
          <a target="blank" href={"https://metamask.io/download/"} className="text-blue-500 hover:underline">
              Clique aqui.
            </a>
        </p>

      <form className="flex flex-col mt-8 ">
        <Input description="Esse nome será gravado na sua NFT para comprovar sua presença" label="Nome" placeholder="Nome" type="text"/>

        <Input description="Email para receber novidades" label="Email" placeholder="your.email@email.com" type="email"/>
        <Input description="Carteira para receber NFT na rede Sepolia" label="Wallet" placeholder="0x00....0000" type="text"/>

        <Button text="Criar NFT" />

      </form>

      </div>
    </div>
  );
}

export default App;
