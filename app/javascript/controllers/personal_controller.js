import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "container", "phone", "save", "eform" ]
  connect() {
    
    this.phoneTarget.onkeypress = (e) => {
      if (e.target === this.phoneTarget) {
        var theEvent = e || window.event; 
        let key;
        if (theEvent.inputType === 'insertFromPaste') {
            key = theEvent.clipboardData.getData('text/plain');
            key = key.Substring(0, 9)
            key = key.Substring(0, 2) + "-" + key.Substring(3, 5) + "-" + key.Substring(6,9)
        } else {
        // Handle key press
            key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if( !regex.test(key) || theEvent.target.value.length >= 12) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
          return
        } else if (theEvent.target.value.length == 3 || theEvent.target.value.length == 7) {
          theEvent.target.value += "-"
        }
      }
    }
    this.containerTarget.querySelectorAll("input").forEach((inputField)=>{
      inputField.onfocus = (e) => {
        for (const el of this.containerTarget.querySelectorAll("input")) {
          if (e.target === el) {
            break
          }
          if (!el.reportValidity()) {
            break
          }
        }
      }
      inputField.oninput = ()=> {
        let saveEnabled = true;
          for (const el of this.containerTarget.querySelectorAll("[required]")) {
            if (el.value == '') {
              saveEnabled = false;
              break
            }
          }
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
    this.eformTarget.classList.remove('hidden')
  }
  cancel() {
    this.containerTarget.classList.add('hidden')
  }
}