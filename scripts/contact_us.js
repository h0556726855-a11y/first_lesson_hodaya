const form = document.querySelector('form');
form.onsubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    //שליחת נתוני הטופס לשרת
    const x = await fetch('https://eliavievhodaya.prodocstalmidim.com/webhook/invaite', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const response_data = await x.json();
    alert(`שלום ${response_data.fullname} ההזמנה התקבלה בהצלחה`);
    window.location.href = "../index.html";
}

