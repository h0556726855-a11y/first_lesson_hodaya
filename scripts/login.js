const form = document.querySelector('form');
form.onsubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    //קריאת שרת לאימות מנהל
    const x = await fetch('https://eliavievhodaya.prodocstalmidim.com/webhook/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    const result = await x.json();
    console.log(result);
    if (result.isAdmin === true) {
        //שמור את פרטי המשתמש הנוכחי בזיכרון המקומי
        localStorage.setItem('user', JSON.stringify({ username: data.username, isAdmin: true }));
        alert('שלום מנהל, מעביר אותך לממשק הניהול');
        window.location.href = "../index.html";
    }
    else {
        const usersList = JSON.parse(localStorage.getItem('allUsers') || '[]');
        const foundUser = usersList.find(user => user.username == data.username && user.password == data.password);
        if (foundUser) {
            console.log(data);
            //שמור את פרטי המשתמש הנוכחי בזיכרון המקומי
            localStorage.setItem('user', JSON.stringify({ username: data.username, isAdmin: false }));
            alert('התחברות בוצעה בהצלחה');
            window.location.href = "../index.html";
        }
        else {
            alert('משתמש לא קיים / פרטי התחברות שגויים');
        }
    }
}
