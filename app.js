//here the functionlity starts


function addTodo(){
    const inputElement = document.querySelector('input')
    const value=inputElement.value;
    
    if(value===''){
        // alert('Please Enter a todo!');
        return;// return means stop here
    }
    
    
    
    const todoContainer=document.createElement('div');
    todoContainer.className='flex justify-between items-center';

    const todoTitle=document.createElement('h4');
    const doneButton=document.createElement('button');
    doneButton.className='bg-green-500 p-2 rounded-lg';
    doneButton.textContent='Done'
    todoTitle.textContent=value;
    const todosContainer=document.querySelector('#todosContainer');
    todoContainer.append(todoTitle);
    todoContainer.append(doneButton);
    todosContainer.append(todoContainer);

    doneButton.onclick=markAsDone;// this removing
    inputElement.value='' // this one resets the input to its original value
 
}





  //removing the todo when you done.
  function markAsDone(event){
    const clickedButton=event.target;
    
    clickedButton.className='hidden'
    // clickedButton.remove();
//------------------------------------
    // const parentDiv=clickedButton.parentNode;
    // const todoItem=parentDiv.children[0];

    const todoItem=clickedButton.previousElementSibling;
    todoItem.className='line-through';
    


    
}
