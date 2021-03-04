let oldText = [];
let content = document.querySelector("#content");

function undo() {
    let array = content.innerHTML.split(" ")
    if(content.innerHTML != "") oldText.push(content.innerHTML);
    
    array.pop()
    content.innerHTML = array.join(" ")
}

function redo() {
    content.innerHTML = oldText.length > 0 ? oldText[oldText.length-1] : content.innerHTML;
    oldText.pop()
}

let checkedBold = false;

function bold() {
    checkedBold = !checkedBold;
    content.style.fontWeight = checkedBold ? 'bold' : 'normal';
}

let checkedItalic = false;

function italic() {
    checkedItalic = !checkedItalic;
    content.style.fontStyle = checkedItalic ? 'italic' : 'normal';
}

let checkedUnderline = false;

function underline() {
    checkedUnderline = !checkedUnderline;
    content.style.textDecoration = checkedUnderline ? 'underline' : 'none';
}

let checkedH1 = false;

function setH1() {
    checkedH1 = !checkedH1;
    checkedH2 = false;
    checkedH3 = false;
    content.style.fontSize = checkedH1 ?'2em' : '1.17em';
}

let checkedH2 = false;

function setH2() {
    checkedH1 = false;
    checkedH2 = !checkedH2;
    checkedH3 = false;
    content.style.fontSize = checkedH2 ?'1.5em' : '1.17em';
}

let checkedH3 = false;

function setH3() {
    checkedH1 = false;
    checkedH2 = false;
    checkedH3 = !checkedH3;
    content.style.fontSize = checkedH3 ?'1.17em' : '1.17em';
}