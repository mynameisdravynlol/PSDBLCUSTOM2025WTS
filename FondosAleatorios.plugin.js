/**
 * @name FondoAleatorio
 * @description Cambia el fondo de Discord a una imagen aleatoria al iniciarse.
 * @version 1.0.0
 * @author Roux
 */

class FondoAleatorio {
    
    // Lista de URLs de imágenes RAW
    imageUrls = [
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Cats%20like%20pans.jpg",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Metro_poster.png",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Reaching%20the%20stars.jpg",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Rest%20today%20to%20grow%20tomorrow.jpg",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/The%20galaxy%20in%20your%20claws.jpg",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Yawn.png",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/You%20can't%20handle%20the%20size%20difference.jpg",
        "https://raw.githubusercontent.com/mynameisdravynlol/PSDBLCUSTOM2025WTS/main/Zilla%20in%20the%20city.jpg"
    ];

    getName() { return "FondoAleatorio"; }
    getAuthor() { return "Roux"; }
    getVersion() { return "1.0.0"; }
    getDescription() { return "Establece un fondo de pantalla aleatorio al cargar el tema."; }

    start() {
        this.applyRandomBackground();
        console.log("FondoAleatorio Plugin: Iniciado.");
    }

    stop() {
        this.clearBackground();
        console.log("FondoAleatorio Plugin: Detenido y fondo limpiado.");
    }

    applyRandomBackground() {
        const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
        const selectedUrl = this.imageUrls[randomIndex];

        const css = `
            #random-background-style {
                background-image: url('${selectedUrl}') !important;
                background-size: cover !important;
                background-position: center !important;
            }
        `;
        
        const style = document.createElement("style");
        style.id = "random-background-style";
        style.innerHTML = css;

        this.clearBackground(); 
        document.head.appendChild(style);
        
        // Kettu/Vencord/BetterDiscord usan '#app-mount' como el contenedor principal en el que queremos el fondo.
        const appMount = document.querySelector('[class*="app_"], #app-mount');
        if (appMount) {
            appMount.id = 'random-background-style'; 
        }
    }

    clearBackground() {
        const existingStyle = document.getElementById("random-background-style");
        if (existingStyle) {
            existingStyle.remove();
        }
        const appMount = document.querySelector('[class*="app_"]'); 
        if (appMount && appMount.id === 'random-background-style') {
            appMount.id = 'app-mount'; // Restaurar el ID original
        }
    }
      }
      
