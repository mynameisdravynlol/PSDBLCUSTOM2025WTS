/**
 * @name FondoAleatorio
 * @description Cambia el fondo de Discord a una imagen aleatoria al iniciarse.
 * @version 1.0.0
 * @author Roux
 */

const imageUrls = [
    "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Cats%20like%20pans.jpg",
    "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Metro_poster.png",
    "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Reaching%20the%20stars.jpg",
    "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Rest%20today%20to%20grow%20tomorrow.jpg",
    "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/The%20galaxy%20in%20your%20claws.jpg",
    "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Yawn.png",
    "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/You%20can't%20handle%20the%20size%20difference.jpg",
    "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Zilla%20in%20the%20city.jpg"
];

let styleElement = null;

function applyRandomBackground() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const selectedUrl = imageUrls[randomIndex];

    const css = `
        [class*="app_"] {
            background-image: url('${selectedUrl}') !important;
            background-size: cover !important;
            background-position: center !important;
        }
    `;
    
    clearBackground();
    
    styleElement = document.createElement("style");
    styleElement.id = "random-background-style";
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}

function clearBackground() {
    if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
        styleElement = null;
    }
}

export default {
    onLoad: () => {
        applyRandomBackground();
        console.log("FondoAleatorio Plugin: Iniciado.");
    },
    
    onUnload: () => {
        clearBackground();
        console.log("FondoAleatorio Plugin: Detenido y fondo limpiado.");
    }
};
