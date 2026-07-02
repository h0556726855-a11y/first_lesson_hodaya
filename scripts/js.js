// בחירת אלמנטים מה-DOM
const home_nav = document.querySelector(".home-nav");
const authButtons = document.querySelector('.auth-buttons');
const contact_us = document.querySelector('#connection');
const welcome_message = document.querySelector('#welcome-message');
// שליפת נתוני המשתמש המחובר
const user = JSON.parse(localStorage.getItem('user'));
// בדיקה אם יש משתמש מחובר
if (user) {
    // יצירת כפתור לפרטי משתמשים
    const detailsUserBtn = document.createElement("a");
    detailsUserBtn.href = "./admin.html";
    if (location.pathname.includes("admin.html")) {
        detailsUserBtn.className = "rotate_link_for_images active";
    } else {
        detailsUserBtn.className = "rotate_link_for_images";
    }
    // הסתרת כפתורי התחברות והרשמה
    authButtons.remove()
    if (location.pathname.includes("index.html")) {
        detailsUserBtn.href = "./html/admin.html";
    }
    detailsUserBtn.innerText += `פרטי משתמשים`;
    // יצירת כפתור ליציאה
    const logoutBtn = document.createElement("a");
    logoutBtn.style.cursor = "pointer";
    logoutBtn.className = "rotate_link_for_images"
    logoutBtn.innerText += `יציאה `;
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem('user');
        alert('התנתקת בהצלחה');
        if (location.pathname.includes("index.html")) {
            window.location.href = "./index.html";
        }
        else {
            window.location.href = "../index.html";
        }
    });
    if (user.isAdmin) {
       // [DOM] ממשק מנהל: הוספת כפתור ניהול והסרת כפתור "צור קשר"
        home_nav.append(detailsUserBtn);
        home_nav.append(logoutBtn);
        contact_us.remove();
        welcome_message.innerText = 'שלום מנהל';
    }
    else {
        // [DOM] ממשק משתמש רגיל: הצגת שם המשתמש 
        welcome_message.innerText = `שלום ${user.username}`;
        home_nav.append(logoutBtn);
    }
}

