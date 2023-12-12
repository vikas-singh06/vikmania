const closebtn = document.querySelector('.closebtn');
const searchbtn = document.querySelector('.search')
function opensearch(){
    if(searchbtn.style.display == "block"){
        searchbtn.style.display = "none";
    }
    else{
        searchbtn.style.display = "block";
    }
}

const navmenu = document.querySelector('nav');
const openmenu = document.querySelector('.open-menu');

openmenu.addEventListener('click', () => {
    navmenu.classList.toggle('active');

});

