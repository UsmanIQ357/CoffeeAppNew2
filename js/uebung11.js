document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.kanban-card');
    const columns = document.querySelectorAll('.kanban-column');

    cards.forEach(card => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }

    function dragEnd(e) {
        e.target.classList.remove('hide');
    }

    columns.forEach(column => {
        column.addEventListener('dragover', dragOver);
        column.addEventListener('dragenter', dragEnter);
        column.addEventListener('dragleave', dragLeave);
        column.addEventListener('drop', drop);
    });

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }

    function drop(e) {
        const id = e.dataTransfer.getData('text/plain');
        const card = document.getElementById(id);
        e.target.classList.remove('drag-over');

        // Überprüft, ob das Ziel eine Spalte oder eine andere Karte ist, und fügt die Karte entsprechend ein
        if (e.target.className === 'kanban-card') {
            e.target.parentNode.insertBefore(card, e.target);
        } else {
            e.target.appendChild(card);
        }
    }
});
