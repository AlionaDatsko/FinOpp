const loginForm = document.querySelector('#login-form') // находим форму

loginForm.addEventListener('submit', e => { //создаем для нее слушатель событий
    e.preventDefault() // отменяем автоматическое обновление формы
    const loginEmail = loginForm['email'].value // получаем значения формы
    const loginPassword = loginForm['password'].value

    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => // делаем запрос на логин через переменную auth
        location = "main.html"
    ).catch(err => console.log(err))
})
