# Task List Application

This project is a simple task list application built with HTML, CSS, and vanilla JavaScript.

## Features

- Add new tasks to the list.
- Mark tasks as done or not done.
- Remove tasks from the list.

## Structure

The application is divided into several sections in the HTML structure:

- A form to add new tasks.
- A display of the current list of tasks, each with buttons to mark as done or remove.

## Styling

The CSS defines a clean and simple style for the task list. The background color for the body is a light grey, with the container centered and the individual sections having a white background with a subtle shadow.

## JavaScript Functionality

The JavaScript file (js/script.js) contains functions to:

- Add a new task to the array of tasks.
- Remove a task based on its index.
- Toggle the 'done' status of a task.
- Bind click events to the 'remove' and 'toggle done' buttons dynamically.
- Render the tasks to the DOM and update the display whenever a task is added, removed, or marked as done.

## Initialization

The init() function in the JavaScript file initializes the application by rendering the tasks and setting up the form submission event listener.

## How to Use

1. Open the index.html file in a browser to start the application.
2. To add a task, type in the input field and click the 'Add task' button.
3. To mark a task as done, click the ✔️ button next to the task.
4. To remove a task, click the 🗑 button.

## Customization

You can easily customize the styles by modifying the css.css file.

---

Thank you for using the Task List Application. For any issues or contributions, please open an issue or a pull request in the repository.
