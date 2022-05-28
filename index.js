let button = document.getElementById('submit-button')
let inputs = document.getElementsByTagName('input')
button.onclick = function (e) {
    e.preventDefault()

    let currentInput = 0
    let hasError = false

    while(currentInput < inputs.length) {
        let value = inputs[currentInput].value

        if(!value){
            inputs[currentInput].labels[0].classList.add('error')
            hasError = true
        }
        currentInput = currentInput + 1
    }

      if(!hasError){
          let element = document.createElement('h1')
          element.textContent = 'Conta criada com sucesso'
          document.body.appendChild(element)
      }
}