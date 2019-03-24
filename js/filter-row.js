function FilterRow(type,operation,value){
    
    this.typeList = ["Text field", "Number field"];
    this.opForNumList = ["Equal","Greater than","Less than"];
    this.opForTextList = ["Containing","Exactly matching","Begins with","Ends withText"]
    //this.value = value || "";
    //this.operation = operation || "Containing";
    //this.type = type || "Text field";

}

FilterRow.prototype.render = function(){
    
    //Создание строоки-обёртки
    var fieldset = document.createElement("div");
    fieldset.className = "filter-row";

    //Создание трёх полей для ввода
    var selectType = document.createElement("select");
    selectType.className = "select-tipe";

    var selectOperation = document.createElement("select");
    selectOperation.className = "select-operation";

    var inputValue = document.createElement("input");
    inputValue.className = "input-value";
    inputValue.setAttribute("type","text");

    //Заполнение первой выпадашки элементами
    var elem;
    for (var i = 0; i < this.typeList.length; i++){
        elem = document.createElement("option");
        elem.className = "select-type__value";
        elem.innerText = this.typeList[i];
        selectType.appendChild(elem);
    }

    //Заполнение второй выпадашки элементами
    for (var i = 0; i < this.opForTextList.length; i++){
        elem = document.createElement("option");
        elem.className = "select-operation__value text-value";
        elem.innerText = this.opForTextList[i];
        selectOperation.appendChild(elem);
    }

    //Заполнение той же выпадашки элементами из второго массива
    for (var i = 0; i < this.opForNumList.length; i++){
        elem = document.createElement("option");
        elem.className = "select-operation__value num-value";
        elem.innerText = this.opForNumList[i];
        elem.setAttribute("hidden","true");
        selectOperation.appendChild(elem);
    }

    fieldset.appendChild(selectType);
    fieldset.appendChild(selectOperation);
    fieldset.appendChild(inputValue);

    return fieldset;
}

FilterRow.prototype.getRowObj = function(){
    return {
        operation: this.operation,
        value: this.value
    }
}

