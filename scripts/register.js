//regex
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const fullname=document.getElementById('fullname');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const Password_verification=document.getElementById('Password_verification');
    const phone_rejex = /^0\d{8,9}$/;
    if (!phone_rejex.test(phone.value)) {
        e.preventDefault();
       alert('מספר פלאפון חייב להכיל מספרים בלבד , להתחיל ב0 ולהכיל בין 9-10 ספרות')
        return;
    }
    const email_regex = /^\w+@\w+\.+\w+$/;
    if (!email_regex.test(email.value)) {
        e.preventDefault();
        alert('אימייל לא תקין')
        return;
    }
    const pass_regex = /^\w{6,}$/;
    if (!pass_regex.test(password.value)) {
        e.preventDefault();
        alert('סיסמה חייבת להכיל מינימום 6 תווים')
        return;
    }
    if (password.value !== Password_verification.value) {
        e.preventDefault();
        alert('סיסמאות אינן תואמות')
        return;
    }

    //localstorage
    const newUser = {
        username: fullname.value,
        password: password.value,
        email: email.value,
        phone: phone.value
    };
    const users = JSON.parse(localStorage.getItem("allUsers")) || [];
    users.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(users));
    alert("נרשמת בהצלחה!")

})


