const gallery_arr = [
    {
        name: "עיצוב ועימוד",
        type: "design",
        h1: "גלריית עיצוב ועימוד",
        gallery: [
            {id:1, image: "..\\images\\galery\\design\\design (1).jpg", category: "עיצוב ועימוד", year: "2024", programs: "Adobe Photoshop & Illustrator", price: "1200" },
            {id:2, image: "..\\images\\galery\\design\\design (2).jpg", category: "עיצוב ועימוד", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "1300" },
            {id:3, image: "..\\images\\galery\\design\\design (3).jpg", category: "עיצוב ועימוד", year: "2023", programs: "Adobe Photoshop & Illustrator", price: "1100" },
            {id:4, image: "..\\images\\galery\\design\\design (4).jpg", category: "עיצוב ועימוד", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "1400" },
            {id:5, image: "..\\images\\galery\\design\\design (5).jpg", category: "עיצוב ועימוד", year: "2024", programs: "Adobe Photoshop & Illustrator", price: "1250" },
            {id:6, image: "..\\images\\galery\\design\\design (6).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "2000" },
            {id:7, image: "..\\images\\galery\\design\\design (7).jpg", category: "עיצוב ועימוד", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "2500" },
            {id:8, image: "..\\images\\galery\\design\\design (8).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "1700", images: ["..\\images\\galery\\design\\design (8).jpg", "..\\images\\galery\\design\\design (9).jpg"] },
            {id:9, image: "..\\images\\galery\\design\\design (10).jpg", category: "עיצוב ועימוד", year: "2022", programs: "Adobe Photoshop & Illustrator", price: "1350" },
            {id:10, image: "..\\images\\galery\\design\\design (11).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "6000" },
            {id:11, image: "..\\images\\galery\\design\\design (12).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "7000" },
            {id:12, image: "..\\images\\galery\\design\\design (13).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "10000", images: ["..\\images\\galery\\design\\design (13).jpg", "..\\images\\galery\\design\\design (14).jpg"] },
            {id:13, image: "..\\images\\galery\\design\\design (15).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "4900" },
            {id:14, image: "..\\images\\galery\\design\\design (16).jpg", category: "עיצוב ועימוד", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "2800" },
            {id:15, image: "..\\images\\galery\\design\\design (17).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "7200" },
            {id:16, image: "..\\images\\galery\\design\\design (18).jpg", category: "עיצוב ועימוד", year: "2024", programs: "Adobe Photoshop & Illustrator", price: "1600" },
            {id:17, image: "..\\images\\galery\\design\\design (19).jpg", category: "עיצוב ועימוד", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "1850" ,images:["..\\images\\galery\\design\\design (19).jpg","..\\images\\galery\\design\\design (20).jpg"]},
            {id:19, image: "..\\images\\galery\\design\\design (21).jpg", category: "עיצוב ועימוד", year: "2023", programs: "Adobe Photoshop & Illustrator", price: "1450" },
            {id:20, image: "..\\images\\galery\\design\\design (22).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "3200", images: ["..\\images\\galery\\design\\design (22).jpg", "..\\images\\galery\\design\\design (23).jpg", "..\\images\\galery\\design\\design (24).jpg", "..\\images\\galery\\design\\design (26).jpg", "..\\images\\galery\\design\\design (25).jpg"] },
            {id:21, image: "..\\images\\galery\\design\\design (27).jpg", category: "עיצוב ועימוד", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "1900" },
            {id:22, image: "..\\images\\galery\\design\\design (28).jpg", category: "עיצוב ועימוד", year: "2024", programs: "Adobe Photoshop & Illustrator", price: "2200" },
            {id:23, image: "..\\images\\galery\\design\\design (29).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "2500" },
            {id:24, image: "..\\images\\galery\\design\\design (30).jpg", category: "עיצוב ועימוד", year: "2023", programs: "Adobe Photoshop & Illustrator", price: "1800" },
            {id:25, image: "..\\images\\galery\\design\\design (31).jpg", category: "עיצוב ועימוד", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "2100" },
            {id:26, image: "..\\images\\galery\\design\\design (32).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "3000" },
            {id:27, image: "..\\images\\galery\\design\\design (33).jpg", category: "עיצוב ועימוד", year: "2024", programs: "Adobe Photoshop & Illustrator", price: "2700" },
            {id:28, image: "..\\images\\galery\\design\\design (34).jpg", category: "עיצוב ועימוד", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "2400" },
            {id:29, image: "..\\images\\galery\\design\\design (35).jpg", category: "עיצוב ועימוד", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "2900" }
        ]
    },
    {
        name: "מיתוג ופרסום",
        type: "publish",
        h1: "גלריית מיתוג ופירסום",

        gallery: [
            {id:1,image: "..\\images\\galery\\publish\\publish (4).jpg", category: "מיתוג ופרסום", year: "2024", programs: "Adobe Photoshop & Illustrator", price: "5000",images:["..\\images\\galery\\publish\\publish (4).jpg","..\\images\\galery\\publish\\publish (5).jpg","..\\images\\galery\\publish\\publish (6).jpg"] },
            {id:4,image: "..\\images\\galery\\publish\\publish (7).jpg", category: "מיתוג ופרסום", year: "2026", programs: "Adobe Photoshop & Illustrator", price: "1900" },
            {id:5,image: "..\\images\\galery\\publish\\publish (8).jpg", category: "מיתוג ופרסום", year: "2023", programs: "Adobe Photoshop & Illustrator", price: "1700" },
            {id:6,image: "..\\images\\galery\\publish\\publish (9).jpg", category: "מיתוג ופרסום", year: "2023", programs: "Adobe Photoshop & Illustrator", price: "6500", images: ["..\\images\\galery\\publish\\publish (9).jpg", "..\\images\\galery\\publish\\publish (1).jpg", "..\\images\\galery\\publish\\publish (2).jpg", "..\\images\\galery\\publish\\publish (3).jpg"] }
        ]
    },
    {
        name: "איור דיגיטלי",
        type: "paint",
        h1: "גלריית איור דיגיטלי",
        gallery: [
            {id:1, image: "..\\images\\galery\\paint\\paint (1).jpg", category: "איור דיגיטלי", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "1500" },
            {id:2, image: "..\\images\\galery\\paint\\paint (2).jpg", category: "איור דיגיטלי", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "1600" },
            {id:3, image: "..\\images\\galery\\paint\\paint (3).jpg", category: "איור דיגיטלי", year: "2024", programs: "Adobe Photoshop & Illustrator", price: "1400" },
            {id:4, image: "..\\images\\galery\\paint\\paint (4).jpg", category: "איור דיגיטלי", year: "2024", programs: "Adobe Photoshop & Illustrator", price: "1300"},
            {id:5, image: "..\\images\\galery\\paint\\paint (8).jpg", category: "איור דיגיטלי", year: "2023", programs: "Adobe Photoshop & Illustrator", price: "1100" },
            {id:6, image: "..\\images\\galery\\paint\\paint (9).jpg", category: "איור דיגיטלי", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "1700" },
            {id:7, image: "..\\images\\galery\\paint\\paint (10).jpg", category: "איור דיגיטלי", year: "2025", programs: "Adobe Photoshop & Illustrator", price: "1900", images: ["..\\images\\galery\\paint\\paint (10).jpg", "..\\images\\galery\\paint\\paint (11).jpg"] }
        ]
    }
];


