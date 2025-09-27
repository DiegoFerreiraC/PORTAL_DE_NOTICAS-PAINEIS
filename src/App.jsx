import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AdminDashboard from "./components/AdminDashboard";
import ClientDashboard from "./components/ClientDashboard";



const App = () => {
  // Inicializando o estado de autenticação com base no localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    console.log("Initial isAuthenticated:", storedAuth);  // Log para verificar o valor inicial
    return storedAuth === "true";
  });

  const [currentPage, setCurrentPage] = useState("login");
  const [registrationMessage, setRegistrationMessage] = useState(""); // Mensagem de sucesso de registro

  // useEffect para verificar mensagens e para depuração
  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated);  // Verifique se o estado está correto
    console.log("currentPage: ", currentPage);  // Verifique a página atual sendo exibida

    const message = localStorage.getItem("registrationMessage");
    if (message) {
      setRegistrationMessage(message);
      localStorage.removeItem("registrationMessage"); // Limpa a mensagem do localStorage
    }
  }, [isAuthenticated, currentPage]); // Isso executa toda vez que esses estados mudam

  // Função para realizar login e mudar a página conforme o tipo de usuário
  const handleLogin = (userType) => {
    console.log("Tentando fazer login com:", userType); 
    if (userType === "admin") {
      setCurrentPage("admin");
    } else if (userType === "client") {
      setCurrentPage("client");
    }
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");  // Armazena o status de autenticação no localStorage
  };

  // Função para logout e redirecionar para a página de login
  const handleLogout = () => {
    console.log("Logout executado"); 
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");  // Remove a chave do localStorage
    setCurrentPage("login");  // Volta para a tela de login
  };

  // Função para ir para a página de registro
  const handleRegisterPage = () => {
    console.log("Navegando para a página de registro");  
    setCurrentPage("register");
  };

  // Função para registrar o usuário e mostrar a mensagem de sucesso
  const handleRegister = () => {
    console.log("Usuário registrado");  // Log para depuração
    setCurrentPage("login");
    setRegistrationMessage("Usuário registrado com sucesso!");
    localStorage.setItem("registrationMessage", "Usuário registrado com sucesso!");  // Salva a mensagem

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      setRegistrationMessage("");  // Limpa a mensagem
    }, 3000);
  };

  // Função para voltar para a página de login
  const handleBackToLogin = () => {
    console.log("Voltando para o login");  // Log para depuração
    setCurrentPage("login");
  };

  return (
    <div>
      <h1>Portal de Notícias</h1>

      {/* Exibe a mensagem de sucesso, se houver */}
      {registrationMessage && <p>{registrationMessage}</p>}

      {/* Página de Login */}
      {currentPage === "login" && !isAuthenticated && (
        <div>
          <LoginForm onLogin={handleLogin} />
          <button onClick={handleRegisterPage}>Criar uma conta</button>
        </div>
      )}

      {/* Página de Registro */}
      {currentPage === "register" && (
        <div>
          <RegisterForm onRegister={handleRegister} />
          <button onClick={handleBackToLogin}>Já tem uma conta? Faça login</button>
        </div>
      )}

      {/* Painel Administrativo */}
      {currentPage === "admin" && isAuthenticated && (
        <div>
          <AdminDashboard onLogout={handleLogout} />
        </div>
      )}

      {/* Painel do Cliente */}
      {currentPage === "client" && isAuthenticated && (
        <div>
          <ClientDashboard onLogout={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default App;
