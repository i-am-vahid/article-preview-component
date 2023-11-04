let share_btn = document.querySelector('#share_btn')
let share_items = document.querySelector('.share__pop')
let back_btn = document.querySelector('#back_btn')

share_btn.addEventListener('click',()=>{
    if (share_items.style.display == 'flex'){
        share_items.style.display = 'none'

    }else{
        share_items.style.display = 'flex'

    }
})

back_btn.addEventListener('click',()=>{
    share_items.style.display = 'none'
})
