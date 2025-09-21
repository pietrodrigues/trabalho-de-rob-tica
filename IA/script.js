// JavaScript para filtro de deficiências
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artCards = document.querySelectorAll('.art-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const disability = this.getAttribute('data-disability');
            
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar as obras de arte
            artCards.forEach(card => {
                if (disability === 'all') {
                    card.style.display = 'block';
                } else {
                    const cardDisability = card.getAttribute('data-disability');
                    if (cardDisability === disability) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});
