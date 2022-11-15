function getParent(element, selector) {
  if (element.matches('.mtb'))
  {
    return element;
  }
  while (element) {
    if(!element.parentElement){
      return null;
    }
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
}
function handlecheck(parentElement){
  var inputElement = parentElement.querySelector('input');
  if(inputElement.checked == true){
    inputElement.checked= false;
  }
  else{
    inputElement.checked= true;
  }
    
}
document.addEventListener('click',function(e){
  var parentInput = getParent(e.target,".mtb");
  if(parentInput){
    handlecheck(parentInput)
  }
})
