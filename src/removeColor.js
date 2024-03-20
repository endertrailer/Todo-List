export default function removeColor(){
    const clicked = document.querySelector('.clicked');
    const projectClicked = document.querySelector('.projectClicked');
     
    try{
        projectClicked.classList.remove('projectClicked');
        
    }

    catch{ /* empty */ }

    try{
        clicked.classList.remove('clicked');
    }
   
   // eslint-disable-next-line no-empty
   catch{/* empty */ }
}