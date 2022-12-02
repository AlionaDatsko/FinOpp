const signupForm = document.querySelector("#signup-form") //находим форму
signupForm.addEventListener('submit', e => { //создаем для нее слушатель событий
    e.preventDefault() // отменяем автоматическое обновление формы
    const email = signupForm['email'].value; // получаем значения формы
    const password = signupForm['password'].value
    const name = signupForm['name'].value
    const surname = signupForm['surname'].value

    auth.createUserWithEmailAndPassword(email, password).then((cred) => { // берем информацию с БД
        return db.collection('users').doc(cred.user.uid).set({ // создаем коллекцию users и в ней запись
            email, password, name, surname
        }).then(() => { // когда всё прошло успешно переходим в документ login.html
            console.log('success')
            signupForm.reset()
            location = "enter.html"
        }).catch(err => {
            console.log(err.message)
        })
    }).catch(err => {
        console.log(err.message)
    })
})