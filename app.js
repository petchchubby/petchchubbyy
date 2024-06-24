function activeShowPage(){
    let content = setTimeout(showPage, 3000);
}
function showPage() {
    document.getElementById('preLoader').style.display = 'none';
    document.getElementById('pageContent').style.display = 'block';
}