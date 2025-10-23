/**
 * Função para mostrar ou esconder informações
 * @param {string} elementId - O ID do elemento a ser mostrado/escondido
 */
function toggleInfo(elementId) {
    // Pega o elemento pelo ID
    var infoElement = document.getElementById(elementId);

    // Verifica se o elemento está escondido ou não
    if (infoElement.style.display === "none" || infoElement.style.display === "") {
        // Se estiver escondido, mostra
        infoElement.style.display = "block";
    } else {
        // Se estiver visível, esconde
        infoElement.style.display = "none";
    }
}
