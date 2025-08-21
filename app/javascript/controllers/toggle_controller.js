import { Controller } from "@hotwired/stimulus"

// Exercise 3: Toggle Visibility
// Demonstrates:
// - Working with CSS classes
// - Using classes values for configuration
// - Multiple targets
// - Conditional logic
export default class extends Controller {
  static targets = ["toggleable"]
  static classes = ["hidden", "visible"]

  connect() {
    // Initialize all toggleable elements as hidden
    this.toggleableTargets.forEach(target => {
      target.classList.add(this.hiddenClass)
    })
  }

  toggle() {
    this.toggleableTargets.forEach(target => {
      if (target.classList.contains(this.hiddenClass)) {
        this.show(target)
      } else {
        this.hide(target)
      }
    })
  }

  show(target = null) {
    const elements = target ? [target] : this.toggleableTargets
    elements.forEach(element => {
      element.classList.remove(this.hiddenClass)
      element.classList.add(this.visibleClass)
    })
  }

  hide(target = null) {
    const elements = target ? [target] : this.toggleableTargets
    elements.forEach(element => {
      element.classList.remove(this.visibleClass)
      element.classList.add(this.hiddenClass)
    })
  }

  // Individual toggle methods for specific targets
  toggleFirst() {
    const target = this.toggleableTargets[0]
    if (target) {
      target.classList.contains(this.hiddenClass) ? this.show(target) : this.hide(target)
    }
  }

  toggleSecond() {
    const target = this.toggleableTargets[1]
    if (target) {
      target.classList.contains(this.hiddenClass) ? this.show(target) : this.hide(target)
    }
  }
}