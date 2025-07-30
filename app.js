document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTask(task);
            input.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        // Function to mark task as complete
        li.addEventListener('click', function(e) {
            if (e.target !== removeBtn) {
                li.classList.toggle('completed');
            }
        });

        // Function to delete task from the list
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function(e) {
            e.stopPropagation(); // Prevent li click event
            list.removeChild(li);
        };
        li.appendChild(removeBtn);
        list.appendChild(li);
    }
});
