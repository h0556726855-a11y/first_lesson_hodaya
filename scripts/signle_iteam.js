// קבלת פרמטרים מה-URL
const search = new URLSearchParams(location.search)
const id = search.get("id");
const type = search.get("type");
// קבלת הגלריה המתאימה
const galery = gallery_arr.find(x => x.type == type).gallery.find(x => x.id == id)
// [DOM] בחירת האלמנטים מהעמוד לצורך מילוי הנתונים
const header = document.querySelector('#header');
const category = document.querySelector('#category-span');
const year = document.querySelector('#year-sapn');
const program = document.querySelector('#progrm-span');
const prices = document.querySelector('#price-span');
const main_img = document.querySelector('.aside_rigut img')
const images = document.querySelector('.aside_rigut ul')
const btn_contact_us = document.querySelector('#btn_contact-us');
// מילוי הנתונים בעמוד
header.innerText = galery.category
category.innerText = galery.category
year.innerText = galery.year
program.innerText = galery.programs
prices.innerText = galery.price+"₪"
main_img.src = galery.image
btn_contact_us.innerText = "להזמנת " + galery.category;
// בדיקה האם קיימות תמונות נוספות בגלריה וריצה עליהן
if (galery.images) {
    galery.images.forEach(element => {
        // יצירת אלמנטי התמונה והוספתם לרשימת התמונות
        const li = document.createElement('li')
        const img = document.createElement('img')
        li.append(img)
        img.src = element
        images.append(li)
    });
}




