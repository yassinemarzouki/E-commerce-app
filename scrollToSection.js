
//J'ai utiliser se script pour faire défiler la Section "Visuelle et Dynamique" vers une section suivante "Product Section"
//  lorsque je clique sur un bouton 
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
