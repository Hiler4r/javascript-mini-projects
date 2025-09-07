document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[disabled]')

    const buttons = document.querySelectorAll('.btn')

    const operators = {
        "÷": '/',
        "×": '*',
        "-": '-',
        "+": '+',
    }

    let expression = ''
    let justEvaluated = false

    const isOperator = char => Object.keys(operators).includes(char)

    buttons.forEach(buttons => {
        buttons.addEventListener('click', () => {
            const value = buttons.textContent.trim()

            if (value === 'AC') {
                expression = ''
                display.value = ''
                justEvaluated = false
                return
            }

            if (value === '=') {
                try {
                    const evaluated = eval(expression)
                    display.value = evaluated
                    expression = evaluated.toString()
                    justEvaluated = true
                } catch (error) {
                    display.value = 'Error'
                    expression = ''
                    justEvaluated = false
                }
                return
            }

            // Backspace button logic
            if (value === '⌫') {
                expression = expression.slice(0, -1)
                display.value = expression || '0'
                justEvaluated = false
                return
            }

            const mappedValue = operators[value] || value

            // If just evaluated and next input is an operator, allow chaining
            if (justEvaluated && isOperator(value)) {
                justEvaluated = false
                expression += mappedValue
                display.value = expression
                return
            }

            // If just evaluated and next input is a number, start new expression
            if (justEvaluated && !isOperator(value)) {
                expression = mappedValue
                display.value = expression
                justEvaluated = false
                return
            }

            // Prevent multiple consecutive operators
            if (isOperator(value) && (expression === '' || isOperator(expression.slice(-1)))) {
                return
            }

            expression += mappedValue
            display.value = expression
        })
    })
})