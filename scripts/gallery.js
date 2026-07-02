// קבלת פרמטרים מה-URL
const search = new URLSearchParams(location.search)
const type=search.get("type");
// קבלת הגלריה המתאימה
const galery = gallery_arr.find(x=>x.type==type);
//עדכון כותרת הגלריה והוספת תמונות לגלריה
const header = document.querySelector('.background_to_galery_page h1');
const section = document.querySelector('section');
section.id = galery.type;
header.innerText = galery.h1;
const galerynav = document.querySelector('nav.galery');
// יצירת אלמנטים עבור כל תמונה בגלריה
const creatGaleryElemnt = (el, type) => {
    const a = document.createElement('a');
    a.href = `../html/single item.html?id=${el.id}&type=${type}`;
    a.className = "rotate_link_for_images"
    const img = document.createElement('img');
    img.src = el.image;
    img.alt = el.category;
    a.append(img);
    galerynav.append(a);
}
galery.gallery.forEach(x=>creatGaleryElemnt(x,galery.type));



