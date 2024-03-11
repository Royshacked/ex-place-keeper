'use strict'
 
const USER_DATA = 'userDB'

function getUserPrefs (){
    const user = loadUserFromStorage(USER_DATA)
    console.log(user)
    if(!user) user = createUser()

    return user
}

function createUser() {
    const user = { 
        email: '', 
        txtColor: '', 
        bgColor: '#f5f5f5', 
        age: '', 
        birthDate: '', 
        birthTime: '' 
    }
    _saveUserPrefs(user)
    return user 
}

function setUserPrefs(email,age,bgColor,txtColor,birthDate,birthTime) {
    const user = {
        email,
        txtColor,
        bgColor,
        age,
        birthDate,
        birthTime
    }
    _saveUserPrefs(user)
}

// private function 

function _saveUserPrefs(user) {
    saveUserToStorage(USER_DATA,user)
}

