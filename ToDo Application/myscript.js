var ul=document.getElementById('list');
var li;
var addButton=document.getElementById('add');
addButton.addEventListener('click',addItem);
var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem);
var reset=document.getElementById('removee');
reset.addEventListener('click',resetItems);


function addItem(){
    var input=document.getElementById('input');
    var item=input.value;
    var textnode=document.createTextNode(item);
    if(item===''){
        var p=document.createElement('p');
        p.textContent="Enter your To-Do";
        document.querySelector('body').appendChild(p);

    }else{
        li=document.createElement('li');
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');
        var label=document.createElement('label');
        label.setAttribute('for','item');
         ul.appendChild(label);
         li.appendChild(checkbox);
         label.appendChild(textnode);
         li.appendChild(label);
         ul.insertBefore(li,ul.childNodes[0]);
         setTimeout(() => {
         li.className='visual';    
         }, 2);
                  input.value='';
}
}
function removeItem(){
li=ul.children
for (let index = 0; index < li.length; index++) {
    while (li[index]&&li[index].children[0].checked) {
ul.removeChild(li[index])        
    } }}
function resetItems() {
li=ul.children
for (let index = 0; index < li.length; index++) {
    while (li[index]) {
ul.removeChild(li[index])
    }}
    
}

