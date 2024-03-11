'use strict'

function renderUserPrefs() {
    const user = getUserPrefs()
    const elBody = document.querySelector('body')

    elBody.style.backgroundColor = user.bgColor
    elBody.style.color = user.txtColor   
}

function onSubmitUserPrefs(ev) {
    ev.preventDefault()

    const elForm = document.querySelector('form')
    const email = elForm.querySelector('.email').value
    const age = elForm.querySelector('.age').value
    const bgColor = elForm.querySelector('.bgc-color').value
    const txtColor = elForm.querySelector('.txt-color').value
    const birthDate = elForm.querySelector('.date').value
    const birthTime = elForm.querySelector('.time').value

    setUserPrefs(email,age,bgColor,txtColor,birthDate,birthTime)
    renderUserPrefs()
}

