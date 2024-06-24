let perfil = document.querySelector(".perfil-container")

const url = 'http://localhost:3000/0';
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Resposta de rede não foi ok')
        }
        return response.json();
        })
    .then(data => {
        if (!Array.isArray(data)) {
            data = [data]
        }

        data.forEach(item => {
            if (item.contatos) {
                const contato = item.contatos;
                perfil.innerHTML += `
                    <div class="perfil-container">
                    <aside class="perfil-foto">
                        <img src="${contato.foto}" alt="Foto de ${contato.nome}">
                    </aside>
                    <main class="perfil-informacoes">
                        <p>${contato.nome}</p>
                    </main>
                    </div>
                `;
            }
        });
    })
.catch(error => {
    console.error('Fetch error:', error);
});
