import React from "react";

export default function PainelCliente({ irParaLogin }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 p-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Portal de Notícias - Painel do Cliente</h1>
      </header>

      <main className="flex flex-col items-center p-8 space-y-12 max-w-4xl mx-auto">

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Editar Perfil</h2>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label htmlFor="nome" className="block mb-1 font-medium">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"/>
            </div>
            <div>
              <label htmlFor="senha" className="block mb-1 font-medium">Nova senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"/>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Salvar Alterações</button>
          </form>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Comentar Notícia</h2>

          <div className="mb-4">
            <label htmlFor="noticia" className="block mb-1 font-medium">Escolha a notícia:</label>
            <select
              id="noticia"
              name="noticia"
              className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500" >
              <option value="0" selected>Selecione uma notícia</option>
              <option value="1">China acusa EUA de "intimidação" após ameaça tarifária sobre petróleo russo</option>
              <option value="2">Arqueólogos acham objetos neolíticos de 5 mil anos em pântano da Suécia</option>
              <option value="3">Ancelotti é direto sobre Neymar na Seleção: "Ele precisa estar 100%"</option>
            </select>
          </div>

          

          <form action="#" method="post" className="space-y-4">
            <div>
              <label htmlFor="comentario" className="block mb-1 font-medium">Seu comentário:</label>
              <textarea
                id="comentario"
                name="comentario"
                rows="4"
                placeholder="Digite seu comentário aqui..."
                required
                className="w-full p-3 border-2 border-white rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Enviar Comentário</button>
          </form>
        </section>

        <div className="w-full max-w-md space-y-4 text-center mt-8">

          <button
            onClick={irParaLogin}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition inline-block ">Sair do Painel
          </button>
        </div>

      </main>
    </div>
  );
}
