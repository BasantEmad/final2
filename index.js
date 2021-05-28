let input = document.getElementById('taskdata');
 
let addbtn = document.getElementById('addbtn');

let notask = document.getElementById('notask');
let tasks = document.getElementById('tasks')


let showNoTasks = () => {
     if(tasks.childNodes.length == 0){
         notask.classList.remove('none')
     }
}



let addTask = ()=>{


let task = input.value; 

  if ( task.length == 0 || task.length < 2 || task.length > 10 ){
  alert ("You Must Enter Valid Data")
  } 
  else {
    notask.classList.add('none');
    tasks.innerHTML+= `<div class='alert alert-info' > ${task} 
    <button class=" delete float-right btn btn-danger">Delete</button> </div>` ;
   
  }
  input.value="";



}

addbtn.addEventListener('click',addTask);

let deleteTask = (e) =>{
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        showNoTasks();
    }
}
 document.addEventListener('click',deleteTask)