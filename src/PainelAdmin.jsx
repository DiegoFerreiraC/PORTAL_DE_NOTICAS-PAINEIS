export default function PainelAdmin({ irParaPainelCliente, irParaLogin }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 p-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Portal de Notícias - Painel do Administrador</h1>
      </header>

      <main className="flex flex-col items-center p-8 space-y-12 max-w-4xl mx-auto">

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Cadastrar Notícia</h2>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label htmlFor="titulo" className="block mb-1 font-medium">Título:</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                required
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500" />
            </div>
            <div>
              <label htmlFor="texto" className="block mb-1 font-medium">Texto da notícia:</label>
              <textarea
                id="texto"
                name="texto"
                rows="6"
                required
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500" />
            </div>
            <div>
              <label htmlFor="categoria" className="block mb-1 font-medium">Categoria:</label>
              <select
                id="categoria"
                name="categoria"
                required
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                defaultValue="">

                <option value="" disabled>Selecione uma categoria</option>
                <option value="politica">Política</option>
                <option value="esportes">Esportes</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="entretenimento">Entretenimento</option>

              </select>
            </div>
            <div>
              <label htmlFor="tags" className="block mb-1 font-medium">Tags:</label>
              <select
                id="tags"
                name="tags"
                multiple
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500">

                <option value="brasil">Brasil</option>
                <option value="mundo">Mundo</option>
                <option value="futebol">Política</option>
                <option value="inovacao">Economia</option>
                <option value="cinema">Cinema</option>
                <option value="entretenimento">Entretenimento</option>
                <option value="ciencia">Ciência</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Cadastrar Notícia</button>
          </form>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Cadastrar Categoria</h2>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label htmlFor="novaCategoria" className="block mb-1 font-medium">Nome da Categoria:</label>
              <input
                type="text"
                id="novaCategoria"
                name="novaCategoria"
                required
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Cadastrar Categoria</button>
          </form>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Cadastrar Tag</h2>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label htmlFor="novaTag" className="block mb-1 font-medium">Nome da Tag:</label>
              <input
                type="text"
                id="novaTag"
                name="novaTag"
                required
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Cadastrar Tag</button>
          </form>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Comentários dos Usuários</h2>

          {[
            { nome: "João Vitor", texto: "Achei a notícia muito informativa. Parabéns à equipe!" },
            { nome: "Maria Oliveira", texto: "Faltou mais detalhes sobre a origem da informação." },
            { nome: "Carlos Souza", texto: "Gostaria de saber mais sobre a repercussão no exterior." }
          ].map(({ nome, texto }, i) => (
            <div key={i} className="bg-gray-700 p-4 rounded-lg mb-4 shadow flex justify-between items-center">
              <div>
                <p className="font-bold text-white">{nome}</p>
                <p className="text-gray-300">{texto}</p>
              </div>
              <button className="ml-4 bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded transition text-sm">Excluir</button>
            </div>
          ))}
        </section>
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Mensagens de Contato</h2>

          {[
            { nome: "Pedro Henrique", texto: "Gostaria de sugerir uma seção de notícias locais." },
            { nome: "Micael Alexandre", texto: "Como posso fazer parte da equipe?" },
            { nome: "Lucas Kester", texto: "Tenho dúvidas sobre como recuperar minha senha" }
          ].map(({ nome, texto }, i) => (
            <div key={i} className="bg-gray-700 p-4 rounded-lg mb-4 shadow flex justify-between items-center">
              <div>
                <p className="font-bold text-white">{nome}</p>
                <p className="text-gray-300">{texto}</p>
              </div>
              <button className="ml-4 bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded transition text-sm">Excluir</button>
            </div>
          ))}
        </section>


        <div className="w-full max-w-md text-center mt-8">
          <button
            onClick={irParaPainelCliente}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition inline-block mr-2" >Ir para o Painel do Cliente</button>
          <button
            onClick={irParaLogin}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition inline-block">Sair do Painel</button>
        </div>

      </main>
    </div>
  );
}
