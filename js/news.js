const notices = document.getElementById('main').addEventListener("click" , (e)=>{
    e.preventDefault();
    const id = e.target.parentElement.parentElement.id;
    console.log(id); 
    return id
});

export default notices;
