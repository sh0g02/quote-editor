import { Controller } from "@hotwired/stimulus"

// Exercise 6: Dropdown Menu
// Demonstrates:
// - Click outside detection
// - Keyboard navigation
// - Accessibility features
// - DOM event handling
export default class extends Controller {
  static targets = ["menu", "button"]
  static classes = ["open", "closed"]

  connect() {
    this.close()
  }

  disconnect() {
    this.removeEventListeners()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.menuTarget.classList.remove(this.closedClass)
    this.menuTarget.classList.add(this.openClass)
    this.buttonTarget.setAttribute("aria-expanded", "true")
    this.addEventListeners()
  }

  close() {
    this.menuTarget.classList.remove(this.openClass)
    this.menuTarget.classList.add(this.closedClass)
    this.buttonTarget.setAttribute("aria-expanded", "false")
    this.removeEventListeners()
  }

  get isOpen() {
    return this.menuTarget.classList.contains(this.openClass)
  }

  addEventListeners() {
    document.addEventListener("click", this.handleOutsideClick.bind(this))
    document.addEventListener("keydown", this.handleKeydown.bind(this))
  }

  removeEventListeners() {
    document.removeEventListener("click", this.handleOutsideClick.bind(this))
    document.removeEventListener("keydown", this.handleKeydown.bind(this))
  }

  handleOutsideClick(event) {
    if (!this.element.contains(event.target)) {
      this.close()
    }
  }

  handleKeydown(event) {
    if (event.key === "Escape") {
      this.close()
      this.buttonTarget.focus()
    }
  }

  selectOption(event) {
    const option = event.target.closest("[data-dropdown-option]")
    if (option) {
      const value = option.dataset.dropdownOption
      this.buttonTarget.textContent = option.textContent
      this.buttonTarget.dataset.selectedValue = value
      this.close()
      
      // Dispatch custom event
      this.dispatch("optionSelected", { 
        detail: { value: value, text: option.textContent } 
      })
    }
  }
}