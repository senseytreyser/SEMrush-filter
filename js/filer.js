function Filter(myId, myClass){
    this.id = myId;
    this.class = myClass;
    this.content = [];
}

Filter.prototype.addRow = function (row){
    var row = row;
    this.content.push(row)
}

Filter.prototype.render = function(){
    
    //Создание главного блока
    var container = document.createElement("div");
    container.id = this.id; 
    container.className = this.class; 

    var addButtField = document.createElement("div");
    addButtField.className = "button-fieldset";

    var addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.innerHTML = "add contribution";

    var actButtField = document.createElement("div");
    actButtField.className = "action-fieldset";

    var applyButton = document.createElement("button");
    applyButton.className = "apply-button";
    applyButton.innerHTML = "apply";

    var clearButton = document.createElement("button");
    clearButton.className = "clear-button";
    clearButton.innerHTML = "clear filter";

    addButtField.appendChild(addButton);
    actButtField.appendChild(applyButton);
    actButtField.appendChild(clearButton);
    container.appendChild(addButtField);
    container.appendChild(actButtField);

    return container;
}

Filter.prototype.showInfo = function (){
    
    var infObj = {
        text:[],
        number:[]
    };
    
    var content = this.content;
    for (var i = 0; i < content.length; i++){
        var type = content[i].type;
        var rowObj = content[i].getRowObj();
        if (type === "Text field"){
            infObj.text.push(rowObj);
        } else if (type === "Number field"){
            infObj.number.push(rowObj);
        }
    }
    
    console.log(infObj)

}