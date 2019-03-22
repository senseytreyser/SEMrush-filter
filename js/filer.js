function Filter(){
    this.content = [];
}

Filter.prototype.addRow = function (row){
    var row = row;
    this.content.push(row)
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
            infObj.number.push(RowObj);
        }
    }
    
    console.log(infObj)

}