const loginForm = document.querySelector('#login-form') // находим форму

loginForm.addEventListener('submit', e => { //создаем для нее слушатель событий
    e.preventDefault() // отменяем автоматическое обновление формы
    const loginEmail = loginForm['email'].value // получаем значения формы
    const loginPassword = loginForm['password'].value
    const loginName = loginForm['name'].value
    const loginSurname = loginForm['surname'].value

    auth.signInWithEmailAndPassword(loginEmail, loginPassword, loginName, loginSurname).then(() => // делаем запрос на логин через переменную auth
        location = "main.html"
    ).catch(err => console.log(err))
})
