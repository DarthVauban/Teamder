const loginForm = document.querySelector('.form-block')
const regLink = document.querySelector('.sign-up')
const regForm = document.querySelector('.reg-form')
const regButton = document.querySelector('.reg-button')
const formSteps = document.querySelectorAll('.form-step')
const stepItems = document.querySelectorAll('.steps .step-item')
const formTitle = document.querySelector('.reg-title')
const logLink = document.querySelector('.sign-in')
const stepForm = document.querySelector('.step-form')


let formStepCounter = 0

regLink.addEventListener('click', () => {
    loginForm.style.display = 'none'
    stepForm.style.display = 'block'
})

logLink.addEventListener('click', () => {
    loginForm.style.display = 'flex'
    stepForm.style.display = 'none'
})

regForm.addEventListener('submit', (e) => {
    e.preventDefault()
})

regButton.addEventListener('click', () => {
    formStepCounter++
    updateFormSteps()
})

function updateFormSteps() {
    formSteps.forEach((step) => {
        step.classList.contains('form-step-active') && step.classList.remove('form-step-active')
    })

    if (formStepCounter === formSteps.length) {
        alert('Registration success')
        loginForm.style.display = 'flex'
        stepForm.style.display = 'none'
    }

    formSteps[formStepCounter].classList.add('form-step-active')

    stepItems[formStepCounter].classList.add('step-active')

    switch (formStepCounter) {
        case 0:
            formTitle.innerHTML = 'Basic information'
            break;
        case 1:
            formTitle.innerHTML = 'Additional information'
            break;

        case 2:
            formTitle.innerHTML = 'Interests'
            regButton.innerHTML = 'SIGN UP!'
            break;

        default:
            formTitle.innerHTML = 'Basic information'
    }

}