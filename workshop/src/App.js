import React from 'react';
import Input from "./components/Input";
import Button from "./components/Button";
function App() {
  return (
    <div className="flex min-h-screen w-full h-full items-center justify-center gap-3">

      <div className=" flex flex-col justify-center items-center bg-slate-600 w-4/6 ">

        <p>
          Receba sua Proof-Of-Attandence NFT
        </p>

        <p className="">
          Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia
        </p>

      <form className="flex flex-col mt-8 ">
        <Input description="Esse nome será gravado na sua NFT para comprovar sua presença" label="Nome" placeholder="João Silva" type="text"/>

        <Input description="Email para receber novidades" label="Email" placeholder="email@email.com" type="email"/>
        <Input description="Carteira para receber NFT" label="Wallet" placeholder="00.00....0000" type="text"/>

        <Button text="Criar NFT" />

      </form>

      </div>
    </div>
  );
}

export default App;
