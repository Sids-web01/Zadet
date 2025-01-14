 const navLinks = document.querySelectorAll('header nav a')
 const logo = document.querySelector('.logo')

 const sections = document.querySelectorAll('section')
 const menuicon = document.querySelector('#menu-icon')
 const navbar = document.querySelector('header nav')

 menuicon.addEventListener('click', () =>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
 })
 
 const activiepage = () =>{
    const header = document.querySelector('header')
    const barsbox = document.querySelector('.bars-box')

    header.classList.remove('active')
    setTimeout(() =>{
        header.classList.add('active')
    }, 1100)




    navLinks.forEach(link =>{
        link.classList.remove('active')
    })

    barsbox.classList.remove('active')
    setTimeout(() =>{
        barsbox.classList.add('active')
    }, 1100)

    sections.forEach(section =>{
        section.classList.remove('active')
    })
    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')
 }

 navLinks.forEach((link, idx) =>{
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')){
            activiepage()

            link.classList.add('active')

            setTimeout(() =>{
                sections[idx].classList.add('active')

            },1100)


        }
    })
 })
 
 logo.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')){
        activiepage()

        navLinks[0].classList.add('active')
        setTimeout(() =>{
            sections[idx].classList.add('active')

        },1100)
    }
 })
 const resumebtns = document.querySelectorAll('.resume-btn')

 resumebtns.forEach((btn, idx) =>{
    btn.addEventListener('click', () =>{
        const resumeDetails= document.querySelectorAll('.resume-detail')

        resumebtns.forEach(btn =>{
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumeDetails.forEach(detail =>{
            detail.classList.remove('active')
        })
        resumeDetails[idx].classList.add('active')
        
    })
 })

 
// Hardcoded student data (ID, Password, Details, and Results)

// jss1 pupils
const studentData = {
    "SID001": {
        password: "1234",
        image: "main.jpg",
        details: {
            name: "Kadija Khalil Massah",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Sallu Khalil",
            contact: "O76 44 66 07",
            remarks: ""
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Maguette Amira Tholley",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Marry Chame",
            contact: "032 832 174",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Diana Umu Jonjo",
            class: "JSS 1",
            age: 10,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Sia Jonjo",
            contact: "088 614 244",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Augustina E C King",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Claudius King",
            contact: "088 79 34 30",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Augusta I C King",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Claudius King",
            contact: "088 79 34 30",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Rugiatu Jalloh",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Billo Jalloh",
            contact: "034 69 51 41",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Nawal B Tholley",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mary chame",
            contact: "032 832 174",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Mariatu Fatmed Sesay",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Mohamed M Sesay",
            contact: "076 866 961",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Haja Y Bangura",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Fatamata Sawaneh",
            contact: "079 650 777",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Mariam S kamara",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. mohamed Kamara",
            contact: "030 88 22 91",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Aminata A Turay",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Alpha Turay",
            contact: "073 555 860",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Sarah Sillah",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. fanta Sillah",
            contact: "088 82 61 67",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Hannah K B Sesay",
            class: "JSS 1",
            age: 10,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs Kadie",
            contact: "076 344 584",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Fatima Conteh",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Adama Tarawally",
            contact: "099 81 18 60",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Marika Fofanah",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Aminata Fofanah",
            contact: "088 80 94 46",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Isha Osman Bangura",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Alhaji Bangura",
            contact: "079 65 99 05",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Isatu S mansaray",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr.Foday Mansaray",
            contact: "076 444 135",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Emmanuela M Lavalie",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr Lavalie",
            contact: "030 38 57 71",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Kadija Kanu",
            class: "JSS 1",
            age: 14,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Mohamed Kamara",
            contact: "030 42 66 22",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Blessing K Y Mattia",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Ishmeal Mattia",
            contact: "077 98 21 01",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
     "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Fatmata M Bangura",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Musa Bangura",
            contact: "072 81 55 11",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Daniella G Pratt",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Oliver Pratt",
            contact: "030 77 59 30",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Isata K Conteh",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Momoh",
            contact: "076 61 40 51",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "elizabeth R Tarawally",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Mabinty Tarawally",
            contact: "080 64 36 56",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Kadija M Convay",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Rugiatu Bangura",
            contact: "088 99 13 80",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Makalay H Bangura",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Mariama Lenoh",
            contact: "030 13 03 45",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Zainab B Kamara",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Ramatu Sesay",
            contact: "078 60 19 23",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Alimatu A Bah",
            class: "JSS 1",
            age: 12,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Alpha Bah",
            contact: "076 81 06 98",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Hajaratu Kamara",
            class: "JSS 1",
            age: 10,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Abdul Kamara",
            contact: "077 54 81 70",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Suhad Conteh",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Alimamy Conteh ",
            contact: "030 48 40 19",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Dorabell G Kamara",
            class: "JSS 1",
            age: 10,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mrs. Anet Koroma",
            contact: "077 23 10 32",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },
    "SID002": {
        password: "12345",
        image: "vibebg5.jpeg",
        details: {
            name: "Aminata Y Jabbie",
            class: "JSS 1",
            age: 11,
            gender: "Female",
            teacher: "Aunty Jane",
            guardian: "Mr. Salieu Jabbie",
            contact: "077 61 32 15",
            remarks: "."
        },
        results: {
            term1Position: 2,
            term2Position: 1,
            term3Position: 1,
            subjects: {
                Math: { term1: 85, term2: 88, term3: 90 },
                English: { term1: 90, term2: 92, term3: 91 },
                Science: { term1: 80, term2: 84, term3: 87 },
                History: { term1: 88, term2: 89, term3: 91 },
                Geography: { term1: 75, term2: 78, term3: 80 },
                Art: { term1: 88, term2: 90, term3: 92 },
                Music: { term1: 70, term2: 75, term3: 80 },
                PE: { term1: 90, term2: 92, term3: 94 },
                French: { term1: 78, term2: 82, term3: 85 },
                IT: { term1: 82, term2: 85, term3: 88 },
                Civics: { term1: 88, term2: 89, term3: 90 },
                Business: { term1: 92, term2: 95, term3: 98 },
                Chemistry: { term1: 76, term2: 79, term3: 80 }
            }
        }
    },

    

};

// Function to check student ID and password
function checkResult() {
    const studentID = document.getElementById("studentID").value.toUpperCase();
    const studentPass = document.getElementById("studentPass").value;
    const resultBox = document.querySelector(".results-box");
    const loginBox = document.querySelector(".login-box");
    const message = document.getElementById("message");
    const studentImage = document.getElementById("studentImage");
    const studentDetails = document.getElementById("studentDetails");
    const resultsTable = document.getElementById("resultsTable");
    const term1Position = document.getElementById("term1Position");
    const term2Position = document.getElementById("term2Position");
    const term3Position = document.getElementById("term3Position");

    if (studentData[studentID] && studentData[studentID].password === studentPass) {
        const student = studentData[studentID];
        resultBox.style.display = "block";
        loginBox.style.display = "none";

        // Set student image
        studentImage.src = student.image;

        // Set student details
        const details = student.details;
        studentDetails.innerHTML = ` 
            <p><strong>Name:</strong> ${details.name}</p>
            <p><strong>Class:</strong> ${details.class}</p>
            <p><strong>Age:</strong> ${details.age}</p>
            <p><strong>Gender:</strong> ${details.gender}</p>
            <p><strong>Class Teacher:</strong> ${details.teacher}</p>
            <p><strong>Guardian:</strong> ${details.guardian}</p>
            <p><strong>Contact:</strong> ${details.contact}</p>
            <p><strong>Remarks:</strong> ${details.remarks}</p>
        `;

        // Set results table
        resultsTable.innerHTML = "";
        const subjects = student.results.subjects;
        for (let subject in subjects) {
            const result = subjects[subject];
            const row = `<tr>
                <td>${subject}</td>
                <td>${result.term1}</td>
                <td>${result.term2}</td>
                <td>${result.term3}</td>
            </tr>`;
            resultsTable.innerHTML += row;
        }

        // Set term positions
        term1Position.textContent = `Term 1 Position: ${student.results.term1Position}`;
        term2Position.textContent = `Term 2 Position: ${student.results.term2Position}`;
        term3Position.textContent = `Term 3 Position: ${student.results.term3Position}`;
    } else {
        message.textContent = "Invalid Student ID or Password. Please try again.";
    }
}

// Function to go back to the login page
function goBack() {
    document.querySelector(".results-box").style.display = "none";
    document.querySelector(".login-box").style.display = "block";
    document.getElementById("studentID").value = "";
    document.getElementById("studentPass").value = "";
    document.getElementById("message").textContent = "";
}