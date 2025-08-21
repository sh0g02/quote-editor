import { Controller } from "@hotwired/stimulus"

// Exercise 4: Todo List (Advanced)
// Demonstrates:
// - Dynamic DOM manipulation
// - Working with templates
// - Array management
// - Local storage
// - More complex user interactions
export default class extends Controller {
  static targets = ["input", "list", "template", "counter"]
  static values = { persist: Boolean }

  connect() {
    this.todos = this.loadTodos()
    this.renderTodos()
    this.updateCounter()
  }

  addTodo() {
    const text = this.inputTarget.value.trim()
    if (text === "") return

    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toLocaleString()
    }

    this.todos.push(todo)
    this.inputTarget.value = ""
    this.renderTodos()
    this.updateCounter()
    this.saveTodos()
  }

  removeTodo(event) {
    const todoId = parseInt(event.target.dataset.todoId)
    this.todos = this.todos.filter(todo => todo.id !== todoId)
    this.renderTodos()
    this.updateCounter()
    this.saveTodos()
  }

  toggleTodo(event) {
    const todoId = parseInt(event.target.dataset.todoId)
    const todo = this.todos.find(t => t.id === todoId)
    if (todo) {
      todo.completed = !todo.completed
      this.renderTodos()
      this.updateCounter()
      this.saveTodos()
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed)
    this.renderTodos()
    this.updateCounter()
    this.saveTodos()
  }

  renderTodos() {
    this.listTarget.innerHTML = ""
    
    this.todos.forEach(todo => {
      const todoElement = this.createTodoElement(todo)
      this.listTarget.appendChild(todoElement)
    })
  }

  createTodoElement(todo) {
    const div = document.createElement("div")
    div.className = "flex items-center justify-between p-2 border-b"
    
    div.innerHTML = `
      <div class="flex items-center">
        <input 
          type="checkbox" 
          ${todo.completed ? "checked" : ""} 
          data-action="change->todo#toggleTodo"
          data-todo-id="${todo.id}"
          class="mr-2"
        >
        <span class="${todo.completed ? 'line-through text-gray-500' : ''}">${todo.text}</span>
        <small class="ml-2 text-gray-400">${todo.createdAt}</small>
      </div>
      <button 
        data-action="click->todo#removeTodo"
        data-todo-id="${todo.id}"
        class="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    `
    
    return div
  }

  updateCounter() {
    const total = this.todos.length
    const completed = this.todos.filter(todo => todo.completed).length
    const remaining = total - completed
    
    this.counterTarget.textContent = `${remaining} remaining of ${total} tasks`
  }

  loadTodos() {
    if (!this.persistValue) return []
    
    const saved = localStorage.getItem("stimulus-todos")
    return saved ? JSON.parse(saved) : []
  }

  saveTodos() {
    if (!this.persistValue) return
    
    localStorage.setItem("stimulus-todos", JSON.stringify(this.todos))
  }

  // Keyboard support
  handleKeydown(event) {
    if (event.key === "Enter") {
      this.addTodo()
    }
  }
}