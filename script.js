// Adiciona um ouvinte de evento ao formulário de entrega
document.getElementById('delivery-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Cria o pop-up dinamicamente se ele ainda não existir
    let popup = document.getElementById('popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'popup';
        popup.innerHTML = `
            <div class="popup-content">
                <p>Seu pedido está a caminho!</p>
                <button id="close-popup">Fechar</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Adiciona evento para fechar o pop-up
        document.getElementById('close-popup').addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }

    // Exibe o pop-up
    popup.style.display = 'flex';
});
