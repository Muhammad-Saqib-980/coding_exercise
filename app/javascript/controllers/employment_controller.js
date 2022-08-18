import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "container", "save"]
  connect() {
    this.containerTarget.querySelectorAll("input").forEach((inputField)=>{
      inputField.onfocus = (e) => {
        if(!this.containerTarget.classList.contains("hidden")) {
          for (const el of this.containerTarget.querySelectorAll("input")) {
            if (e.target === el) {
              break
            }
            if (!el.reportValidity()) {
              window.document.querySelectorAll(".datepicker").forEach(e => e.classList.add('hidden'))
              break
            }
          }

        } 
      }
      window.document.onclick = ()=> {
        let saveEnabled = true;
          for (const el of this.containerTarget.querySelectorAll("[required]")) {
            if (el.value == '') {
              saveEnabled = false;
              break
            }
          }
          debugger
          if (saveEnabled) {
            this.saveTarget.removeAttribute('disabled')
          } else {
            this.saveTarget.setAttribute('disabled', true)
          }
      }
    })
    this.saveTarget.setAttribute('disabled', true)
  }
  open() {
    this.containerTarget.classList.remove('hidden')
  }
  save() {
    this.containerTarget.classList.add('hidden')
  }
}