import { Controller } from "@hotwired/stimulus"

// Exercise 5: AJAX Requests
// Demonstrates:
// - Making HTTP requests
// - Handling loading states
// - Error handling
// - Working with JSON responses
export default class extends Controller {
  static targets = ["output", "loading", "error"]
  static values = { url: String }

  async fetchData() {
    try {
      this.showLoading()
      this.hideError()
      
      const response = await fetch(this.urlValue)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      this.displayData(data)
      
    } catch (error) {
      this.showError(error.message)
    } finally {
      this.hideLoading()
    }
  }

  async postData(event) {
    event.preventDefault()
    
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    
    try {
      this.showLoading()
      this.hideError()
      
      const response = await fetch(this.urlValue, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content
        },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      this.displayData(result)
      event.target.reset()
      
    } catch (error) {
      this.showError(error.message)
    } finally {
      this.hideLoading()
    }
  }

  displayData(data) {
    this.outputTarget.innerHTML = `
      <pre class="bg-gray-100 p-4 rounded">
        ${JSON.stringify(data, null, 2)}
      </pre>
    `
  }

  showLoading() {
    this.loadingTarget.classList.remove("hidden")
  }

  hideLoading() {
    this.loadingTarget.classList.add("hidden")
  }

  showError(message) {
    this.errorTarget.textContent = message
    this.errorTarget.classList.remove("hidden")
  }

  hideError() {
    this.errorTarget.classList.add("hidden")
  }
}