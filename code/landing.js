const adminBtn = document.querySelector('.admin');
const form = document.querySelector('.login');
let show = false;

adminBtn.addEventListener('click', (e) => {
    if(!show){
        form.style.display = 'flex';
        show = true;
    }else{
        form.style.display = 'none';
        show = false
    }
});
