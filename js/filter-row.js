function FilterRow(type,operation,value){
    this.type = type || "Text field";
    this.operation = operation || "Containing";
    this.value = value || "";
}

FilterRow.prototype.getRowObj = function(){
    return {
        operation: this.operation,
        value: this.value
    }
}