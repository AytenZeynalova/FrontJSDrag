let leftlist = document.querySelector('#list1');
let rightlist = document.querySelector('#list2');
var box = document.querySelector('.box');


let leftLIs = document.querySelectorAll('#list1 li');
let rightLIs= document.querySelectorAll('#list2 li');


leftLIs.forEach(elem=>{

    elem.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));

    })
}
)

rightlist.addEventListener('dragover',function(e){
    e.preventDefault();
})



rightlist.addEventListener('drop',function(e)
{
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    rightlist.appendChild(li);


})

rightLIs.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})

leftlist.addEventListener('dragover',function(e){
    e.preventDefault();
})


leftlist.addEventListener('drop',function(e)
{
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    leftlist.appendChild(li);
})


box.addEventListener('dragover',function(e){
    e.preventDefault();
})


box.addEventListener('drop',function(e){

    let pEl = document.createElement('p');
    pEl.classList.add('pEl');
    let dataId = e.dataTransfer.getData('dataId');
    let boxLi = document.querySelector('[data-id="'+dataId+'"]');
    pEl.innerText = boxLi.innerText;
    box.appendChild(pEl);
    boxLi.remove();
})





