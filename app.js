

function addTodo(){
    const inputElement = document.querySelector('input')
    const value=inputElement.value;
    
    
    
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

    inputElement.value=''


    

    

  


    
}