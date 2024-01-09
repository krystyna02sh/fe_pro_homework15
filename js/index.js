document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const addBtn = document.getElementById('addBtn');
    const list = document.getElementById('list');

    addBtn.addEventListener('click', function () {
        const text = textInput.value.trim();
        if (text !== '') {
            addListItem(text);
            textInput.value = '';
        }
    });
    list.addEventListener('click', function (event) {
        if (event.target.classList.contains('deleteBtn')) {
            const listItem = event.target.closest('li');
            if (listItem) {
                listItem.remove();
            }
        }
    });

    function addListItem(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        listItem.insertAdjacentHTML('beforeend', ' <span class="deleteBtn">[x]</span>');
        list.appendChild(listItem);
    }
});
