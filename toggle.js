toggleMenu = () => {
    let toggle = document.querySelector('.toggle');

    let navigation = document.querySelector('.sidebar-container');
    let main = document.querySelector('.content-container');
    console.log(navigation)
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.toggle').addEventListener('click', toggleMenu);

});