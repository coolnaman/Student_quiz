window.addEventListener("load",bindEvent);
function init(){
    bindEvent();
    updateCount();
}
function bindEvent(){
    document.querySelector("#add").addEventListener("click",addQuestion);
}
function addQuestion(){
    var questionObject = new Question();
    // console.log("questionobject",questionObject);
    for( let key in questionObject){
        questionObject[key]= document.querySelector('#'+key).value;
    }
    questionOperations.add(questionObject);
    console.log("questionobject",questionObject);
    printQuestion(questionObject);
    updateCount();
}

function updateCount(){
    document.querySelector("#total").innerText = questionOperations.questions.length;
    document.querySelector("#mark").innerText = questionOperations.questions.length;
    document.querySelector("#unmark").innerText = questionOperations.questions.length;
}
function trash(){
    console.log("Trash Call",this);
    var id = this.getAttribute("qid");
    questionOperations.mark(id);
    var tr =  this.parentNode.parentNode;
    console.log("tr",tr);
    tr.classList.toggle("alert-danger");
    updateCount();
}
function edit(){
    console.log("Edit Call",this);
}
function createIcon(className, fn, id){
    var icon = document.createElement("i");
    icon.className= className;
    icon.setAttribute("qid",id);
    icon.addEventListener("click",fn);
    return icon;
}
function printQuestion(questionObject){
    var tbody = document.querySelector("#questionlist");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in questionObject){
        tr.insertCell(index).innerText = questionObject[key];
        index++;
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon('fas fa-trash-alt mr-2',trash,questionObject.id));
    td.appendChild(createIcon('fas fa-edit',edit,questionObject.id));
}