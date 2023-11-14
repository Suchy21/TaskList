{
    const tasks = [
        {
            content: "Spacer z psem", 
            done: false,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done: false,
            class: "tasks__item"
        });
        render();
    };

    
    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const render = () => {
        let htmlString = "";
        for (const [taskIndex, task] of tasks.entries()) {
            htmlString += `
                <div class="tasks">
                    <li class="text "${task.done ? ' style="text-decoration: line-through;"' : ''}>
                        <button class="tasks__item js-done">✔️</button>
                        ${task.content}
                        <button class="tasks__item--remove js-remove">🗑</button>
                        
                    </li>
                </div>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };
















    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
        document.querySelector(".js-newTask").value = ""; // Czyszczenie pola wprowadzania
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}
