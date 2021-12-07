function myFunction() {
    document.getElementById("skillsDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        dropdowns.map(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            };
        })
    }
}