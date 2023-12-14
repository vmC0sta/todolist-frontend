const searchIcon = document.getElementById("search-icon")
const cancelIcon = document.getElementById("cancel-icon")

searchIcon.addEventListener('click',()=>{
    const main_nav = document.getElementById("main_nav")
    const other_nav = document.getElementById("other_nav")
    main_nav.style.display = 'none'
    other_nav.style.display = 'flex'
})

cancelIcon.addEventListener('click',()=>{
    const main_nav = document.getElementById("main_nav")
    const other_nav = document.getElementById("other_nav")
    main_nav.style.display = 'flex'
    other_nav.style.display = 'none'
})