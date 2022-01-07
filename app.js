/* NAVIGATION HAMBURGER _________________________________*/

const hamburger = document.querySelector('.btn_burger')
const header = document.querySelector('.header-inner')
const lists = document.querySelectorAll('.list')

/* toggle function on header btn */
hamburger.addEventListener('click', () => {
    header.classList.toggle('show_menu')
})

/* when pressing li in menu menu closing */
lists.forEach(list => {
    list.addEventListener('click', e => {
        if (e.currentTarget.parentElement.classList.contains('menu')) {
            header.classList.toggle('show_menu')
        }
    })
})



/* ORDDER MODAL________________________________________ */

const btnOrder = document.querySelector('.btn_order')
const orderModal = document.querySelector('.order_modal')
const btnClose = document.querySelector('.btn_close')
const btnPush = document.querySelector('.btn_zakaz')

btnOrder.addEventListener('click', () => {
    orderModal.classList.toggle('order_modal_show')
})

btnClose.addEventListener('click', () => {
    orderModal.classList.toggle('order_modal_show')
})

btnPush.addEventListener('click', () => {
    orderModal.classList.toggle('order_modal_show')
})

/* CART COUNTER_______________________________________ */

/* getting btns collection */
const btns = document.querySelectorAll('.btn')
const cart = document.querySelector('.cart')
const cartModal = document.querySelector('.cart_modal_outer')
const counter = document.querySelector('.counter')
const yes = document.querySelector('.btn_yes')
const no = document.querySelector('.btn_no')

let shop = 0

btns.forEach( x => {
    x.addEventListener( 'click' , e => {
        const styles = e.currentTarget.classList
        if (styles.contains('btn_buy')) {
            shop++
            counter.classList.add('counter_open')
            counter.textContent = shop
            hamburger.classList.add('burger_border')
        }
    })
})

cart.addEventListener('click', () => {
    cartModal.classList.toggle('cart_modal_show')
})

yes.addEventListener('click', () => {
    cartModal.classList.toggle('cart_modal_show')
    shop = 0
    counter.classList.remove('counter_open')
    hamburger.classList.remove('burger_border')
})

no.addEventListener('click', () => {
    cartModal.classList.toggle('cart_modal_show')
})


/* REVIEWS______________________________________________ */

const reviews = [
    {
        id: 1,
        photo: 'https://sevastopolfm.ru/wp-content/uploads/doja-cat2.jpg',
        reName: 'Doja Cat',
        reText: 'Sheeesh Im rly enjoyed this website. So Ive wanted to learn DataScience and ordered a book here. Everything was excellent! Book came rly fast!'
    },
    {
        id: 2,
        photo: 'https://pbs.twimg.com/profile_images/1267366344787460098/BetF31XG_400x400.jpg',
        reName: 'Naruto Uzumaki',
        reText: 'Ohayo! So in our Shinobi Academy was presented a new lesson series. It is about programming dattebayo! So i bought a book here. It was delivired as if ur deliver was Shisui Uchiha!'
    },
    {
        id: 3,
        photo: 'https://cdn.mos.cms.futurecdn.net/RKB5AZUonQxf5rHLiW6GpZ.jpg',
        reName: 'Christopher Nolan',
        reText: 'Well, in my new movie which is coming in 2025 its so much about programming. I have actually ordered like a library. Everything came fast and the quality of this website is amazing.'
    },
    {
        id: 4,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg/600px-Besuch_Bundeskanzlerin_Angela_Merkel_im_Rathaus_K%C3%B6ln-09916.jpg',
        reName: 'Angela Merkel',
        reText: 'When I quit politics I realised that I want to build user interfaces. I have used this website and brought tones of stuff about Swift. Enjoyed this site!'
    }
]

let avatar = document.getElementById("avatar")
let fullName = document.getElementById("name")
let text = document.getElementById("text")

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let opener = 0

document.addEventListener('DOMContentLoaded', () => {
    downloadPerson()
})

const downloadPerson = () => {
    const item = reviews[opener]
    avatar.src = item.photo
    fullName.textContent = item.reName
    text.textContent = item.reText
}

prevBtn.addEventListener('click', () => {
    opener--
    if (opener < 0) {
        opener = reviews.length - 1
    }
    downloadPerson()
})

nextBtn.addEventListener('click', () => {
    opener++
    if (opener == reviews.length ) {
        opener = 0
    }
    downloadPerson()
})


/* DROPDOWN ____________________________________________ */

const qaCollection = document.querySelectorAll('.qa_pair')

qaCollection.forEach((pair) => {
    const drop = pair.querySelector('.question')
    drop.addEventListener('click', () => {

        qaCollection.forEach( item => {
            if (item.classList !== pair.classList) {
                item.classList.remove('show_dropdown')
            }
        })


        pair.classList.toggle('show_dropdown')
    })
})