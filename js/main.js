const form = document.querySelector('#form-history'); // находим форму в документе
const historyContainer = document.querySelector('#history_content')
let date = new Date(); // создаём переменные
let time = date.getTime();
let counter = time;
let todos = []

auth.onAuthStateChanged((user) => {
    console.log(user)
    if (user) {
        console.log("user is signed in at users.html");
        let nameUs = user.name
        console.log(nameUs)
    } else {
        alert(
            "your login session has expired or you have logged out, login again to continue"
        );
        location = "enter.html";
    }
});

function logout() {
    auth.signOut();
    //localStorage.removeItem('todos');
}

function cardsButton(){
    let newCard = prompt("Какой баланс на карте?")
    if(newCard){
        alert("Ваши данные сохранены")
    }
}

function historyPlus(){
    const text = form['reason'].value;
    const amount = form['amount'].value; // сохраняем в переменную значение импута
    let id = (counter += 1); // создаем id
    form.reset();

    auth.onAuthStateChanged((user) => { // используем данные авторизованного пользователя
        if (user) {
            db.collection(user.uid).doc('_' + id).set({ // создаем коллекцию, которая будет иметь uid пользователя и добавляем запись
                // создаём тело нашего запроса (информация о задаче)
                id: '_' + id,
                text,
                amount,
                plus: true,
            }).then(() => {
                console.log('todo added');
            }).catch(err => {
                console.log(err.message);
            })
        }
    })
}

