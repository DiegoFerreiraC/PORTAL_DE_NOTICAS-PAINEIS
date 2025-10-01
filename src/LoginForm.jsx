export default function LoginForm({ irParaCadastro, irParaPainel }) {
  return (
    <form action="#" method="post" className="bg-gray-800 p-8 rounded-lg shadow-lg w-80">
      <h2 className="text-2xl mb-6 text-center text-white">Login</h2>
      <label htmlFor="email" className="block text-sm mb-2 text-white">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full p-3 mb-4 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"/>
      <label htmlFor="senha" className="block text-sm mb-2 text-white">Senha:</label>
      <input
        type="password"
        id="senha"
        name="senha"
        required
        className="w-full p-3 mb-4 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"/>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={irParaPainel}
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">Login</button>
        <button
          type="button"
          onClick={irParaCadastro}
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">Cadastro</button>
      </div>
    </form>
  );
}
