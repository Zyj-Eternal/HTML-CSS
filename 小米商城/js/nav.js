let inputSearch = document.getElementById('inputSearch');
let searchLogo = document.getElementById('searchLogo')

// 通过点击事件来控制边框
inputSearch.onclick = function () { 
    if (searchLogo.getAttribute("class") == "isTrue") {
        inputSearch.style.border = "1px solid #ff6700";
        searchLogo.style.border = "1px solid #ff6700";
        searchLogo.setAttribute("class", "");
    } else {
        inputSearch.style.border = "";
        searchLogo.style.border = "";
        searchLogo.setAttribute("class", "isTrue");
    }
}