//menu-btn класс на кнопке бургера

document.querySelector('.menu-btn').addEventListener('click',() =>{
  //..toggle() добавляет класс если его нет и удаляет если он есть
    document.querySelector('.menu-btn').classList.toggle('act')
    document.querySelector('.header_menu').classList.toggle('act')

})
    // .header_menu_item eto class v ssylkah v menu.
    // nuzhen dlya zakrytiya pri click
document.querySelectorAll('.header_menu_item').forEach((oneLink) => {
   //oneLink это имя одной ссылки меню. Придумываем сами названия.
    oneLink.addEventListener('click',() => {
        document.querySelector('.menu-btn').classList.toggle('act')
        document.querySelector('.header_menu').classList.toggle('act')
    })
})