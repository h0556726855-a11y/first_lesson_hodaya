document.addEventListener("DOMContentLoaded", () => {
    // שליפת נתוני המשתמשים מה-localStorage
    const table_user = document.querySelector('#usersTable');
    const users = JSON.parse(localStorage.getItem("allUsers")) || [];
    // בדיקה אם יש משתמשים
    if (users.length === 0) {
        table_user.innerHTML = "<tr><td colspan='4'>אין משתמשים רשומים כרגע</td></tr>";
        return;
    }
    // יצירת שורות עבור כל משתמש
    users.forEach(user => {
        const row = `
        <tr>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.password}</td>
        </tr>
        `;
        table_user.innerHTML += row;
    });
});
const tableBody = document.querySelector('#ordersTable tbody');
// [API] פונקציה למשיכת נתונים מהשרת ועדכון הטבלה
async function loadData() {
    try {
        const url = 'https://eliavievhodaya.prodocstalmidim.com/webhook/get_details';
        const response = await fetch(url);
        const data = await response.json();
        const orders = Array.isArray(data) ? data : [data];

        const ordersTable = document.querySelector('#ordersTable #trheader');
        const keys = Object.keys(orders[0]);
        keys.splice(keys.findIndex(x => x == "row_number"), 1)
        keys.forEach(x => {
            const th = document.createElement('th');
            th.innerText = x;
            ordersTable.append(th);
        });
        // מילוי נתוני הטבלה
        orders.forEach(order => {
            const tr = document.createElement('tr');
            keys.forEach(x => {
                const td = document.createElement('td');
                td.innerText = order[x];
                tr.append(td);
            });
            tableBody.append(tr);
        });
    } catch (error) {
        console.error('שגיאה במשיכת נתונים:', error);
        alert('קרתה שגיאה בטעינת ההזמנות');
    }
};
loadData();