function addnewtask() {
   var list = document.getElementById("lst")
    var text = document.getElementById("taskname").value;
    var listitem = document.createElement("li");

    const textelement = document.createTextNode(text);
    listitem.appendChild(textelement)
    list.appendChild(listitem)
}
