export default function CadastroForm({ irParaLogin }) {
  return (
    <form
      action="#"
      method="post"
      className="bg-gray-800 p-8 rounded-lg shadow-lg w-80">
      <h2 className="text-2xl mb-6 text-center text-white">Cadastro</h2>

      <label htmlFor="nome" className="block text-sm mb-2 text-white">Nome completo:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        required
        className="w-full p-3 mb-4 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"/>

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
      <label htmlFor="confirmar-senha" className="block text-sm mb-2 text-white">Confirmar senha:</label>

      <input
        type="password"
        id="confirmar-senha"
        name="confirmar-senha"
        required
        className="w-full p-3 mb-6 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"/>

      <div className="flex justify-between">

        <button
          type="submit"
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">Cadastrar</button>

        <button
          type="button"
          onClick={irParaLogin}
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">Voltar</button>
      </div>
    </form>
  );
}
