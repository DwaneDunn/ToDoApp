//to do Js

// Each line should look like this:
//<li><input type="checkbox" /><span>Write this //tutorial</span></li>

/*var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {
        alert("ToDo: Add new item");
};*/
window.onload = function(){

    function addNewItem(list, itemText) {
       var listItem = document.createElement("li");
        listItem.innerText = itemText;

        list.appendChild(listItem);
    }

    var inItemText = document.getElementById("inItemText");
    inItemText.focus();
    inItemText.onkeyup = function(event){
        if (event.which == 13){
            var itemText = inItemText.value;
            if (!itemText || itemText == "" || itemText == " "){
                return false;
            }

    addNewItem(document.getElementById("todoList"), itemText);
            inItemText.focus();
            inItemText.select();
    };
};