function activeShowPage(){
    let content = setTimeout(showPage, 3000);
}
function showPage() {
    document.getElementById('preLoader').style.display = 'none';
    document.getElementById('pageContent').style.display = 'block';
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // ถ้า scroll ลงมากกว่า 20px ให้เพิ่ม class "scroll" ให้กับ Navbar
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").classList.add("scroll");
    } else {
        // ถ้า scroll ขึ้นมาสูงกว่า 20px ให้ลบ class "scroll" ทิ้ง
        document.getElementById("navbar").classList.remove("scroll");
    }
}