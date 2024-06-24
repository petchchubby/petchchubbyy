function activeShowPage(){
    let content = setTimeout(showPage, 3000);
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