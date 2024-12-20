document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".pro");
    const itemsPerPage = 4; // Nombre d'articles par page
    const totalPages = Math.ceil(products.length / itemsPerPage);
    let currentPage = 1;

    const renderPage = (page) => {
        // Masquer tous les produits
        products.forEach((product, index) => {
            product.style.display = "none";
        });

        // Afficher les produits de la page actuelle
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        for (let i = start; i < end && i < products.length; i++) {
            products[i].style.display = "block";
        }

        // Mettre à jour l'état des boutons
        document.getElementById("prev").disabled = page === 1;
        document.getElementById("next").disabled = page === totalPages;

        // Mettre à jour les numéros de page
        document.getElementById("page-numbers").textContent = `Page ${page} of ${totalPages}`;
    };

    // Événements des boutons
    document.getElementById("prev").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    document.getElementById("next").addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    // Afficher la première page au chargement
    renderPage(currentPage);
});
