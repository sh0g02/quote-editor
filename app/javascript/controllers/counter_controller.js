import { Controller } from "@hotwired/stimulus"

// Exercise 1: Basic Counter
// A simple counter that demonstrates:
// - Basic controller structure
// - Using targets to reference DOM elements
// - Handling click events
// - Updating the DOM
export default class extends Controller {
  static targets = ["count"]

  initialize() {
    this.count = 0
  }

  connect() {
    this.countTarget.textContent = this.count
  }

  increment() {
    this.count++
    this.countTarget.textContent = this.count
  }

  decrement() {
    this.count--
    this.countTarget.textContent = this.count
  }

  reset() {
    this.count = 0
    this.countTarget.textContent = this.count
  }
}