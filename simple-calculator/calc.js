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

    const isOperator = char => Object.keys(operators).includes(char)

    buttons.forEach(buttons => {
        buttons.addEventListener('click', () => {

            const value = buttons.textContent.trim()

            if (value === 'AC') {
                expression = ''
                display.value = ''
                return
            }

            if (value === '=') {
                try {
                    const evaluated = eval(expression)
                    display.value = evaluated
                    expression = evaluated.toString()
                } catch (error) {
                    display.value = 'Error'
                    expression = ''
                }
                return
            }

            const mappedValue = operators[value] || value

            if (isOperator(value) && (expression === '' || isOperator(expression.slice(-1)))) {
                return
            }


            expression += mappedValue
            display.value = expression
        })
    })
})