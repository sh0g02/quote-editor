import { Controller } from "@hotwired/stimulus"

// Exercise 2: Form Validation
// Demonstrates:
// - Working with form inputs
// - Using values to store configuration
// - Real-time validation
// - CSS class manipulation
export default class extends Controller {
  static targets = ["input", "error", "submit"]
  static values = { 
    minLength: Number,
    required: Boolean 
  }

  connect() {
    this.validateForm()
  }

  validate() {
    const value = this.inputTarget.value
    const isValid = this.isValidInput(value)
    
    this.toggleError(!isValid)
    this.toggleSubmitButton(isValid)
  }

  isValidInput(value) {
    if (this.requiredValue && value.trim() === "") {
      this.showError("This field is required")
      return false
    }
    
    if (this.minLengthValue && value.length < this.minLengthValue) {
      this.showError(`Minimum ${this.minLengthValue} characters required`)
      return false
    }
    
    return true
  }

  showError(message) {
    this.errorTarget.textContent = message
  }

  toggleError(show) {
    this.errorTarget.classList.toggle("hidden", !show)
    this.inputTarget.classList.toggle("border-red-500", show)
    this.inputTarget.classList.toggle("border-gray-300", !show)
  }

  toggleSubmitButton(enabled) {
    this.submitTarget.disabled = !enabled
    this.submitTarget.classList.toggle("opacity-50", !enabled)
  }

  validateForm() {
    const allInputs = this.inputTargets || [this.inputTarget]
    const allValid = allInputs.every(input => this.isValidInput(input.value))
    this.toggleSubmitButton(allValid)
  }
}