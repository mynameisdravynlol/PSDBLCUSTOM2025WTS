// ==UserScript==
// @name         Esto cambia tu fondo :0
// @description  Cambia el fondo de los chats aleatoriamente
// @author       Roux
// ==/UserScript==

(function() {
    // 1. LISTA DE IMÁGENES: Puedes añadir todos los links que quieras aquí
    const MIS_FONDOS = [
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Reaching%20the%20stars.jpg",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Black%20wolf.jpg",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Ummm.jpg"
    ];

    // 2. SELECCIÓN ALEATORIA
    const imagenFinal = MIS_FONDOS[Math.floor(Math.random() * MIS_FONDOS.length)];

    // 3. FUNCIÓN PARA APLICAR EL FONDO
    function aplicarFondo() {
        if (!document.getElementById("random-bg-style")) {
            const style = document.createElement("style");
            style.id = "random-bg-style";
            style.innerHTML = `
                /* Fondo de la zona de chat */
                [class*="chatContent_"], [class*="container_"] {
                    background-image: url('${imagenFinal}') !important;
                    background-size: cover !important;
                    background-position: center !important;
                    background-attachment: fixed !important;
                }
                /* Hace el área de mensajes semi-transparente para ver el fondo */
                [class*="messagesWrapper_"] {
                    background: rgba(0, 0, 0, 0.4) !important;
                }
                /* Limpia fondos de canales para evitar bloques sólidos */
                [class*="chat_"], [class*="threadSidebar_"] {
                    background: transparent !important;
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Ejecutar cuando cargue la página
    aplicarFondo();
    
    // Por si Discord cambia de canal (esto ayuda en móviles)
    const observer = new MutationObserver(aplicarFondo);
    observer.observe(document.body, { childList: true, subtree: true });
})();

