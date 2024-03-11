'use strict'

function saveUserToStorage(key,val) {
    const valStr = JSON.stringify(val)
    localStorage.setItem(key,valStr)
}

function loadUserFromStorage(key) {
    const valStr = localStorage.getItem(key)
    return JSON.parse(valStr)
}

