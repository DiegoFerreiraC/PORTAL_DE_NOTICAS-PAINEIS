import { useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import CadastroForm from "./CadastroForm";
import PainelAdmin from "./PainelAdmin";
import PainelCliente from "./PainelCliente";

export default function App() {
  const [tela, setTela] = useState("login"); // "login", "cadastro", "painelAdmin", "painelCliente"

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center w-full max-w-4xl px-4">
        <Header />
        {tela === "login" && (<LoginForm irParaCadastro={() => setTela("cadastro")} irParaPainel={() => setTela("painelAdmin")}/> )}
        {tela === "cadastro" && <CadastroForm irParaLogin={() => setTela("login")} />}
        {tela === "painelAdmin" && (<PainelAdmin irParaLogin={() => setTela("login")}irParaPainelCliente={() => setTela("painelCliente")}/> )}
        {tela === "painelCliente" && (<PainelCliente irParaLogin={() => setTela("login")} /> )}
      </div>
    </div>
  );
}
