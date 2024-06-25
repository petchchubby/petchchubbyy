function activeShowPage(){
    let content = setTimeout(showPage, 3500);
}
function showPage() {
    document.getElementById('preLoader').style.display = 'none';
    document.getElementById('pageContent').style.display = 'block';
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").classList.add("scroll");
    } else {
        
        document.getElementById("navbar").classList.remove("scroll");
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const returnToTop = document.getElementById('returnToTop');

    returnToTop.addEventListener('click', function(e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});