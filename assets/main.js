function startGame(){
    const griglia = document.getElementById("griglia");
    
    console.log(griglia);


    function GridElement(){
      let item = document.createElement('div');
      item.classList.add('quadrati');
      return item 
    }
    

    for(let i = 0; i < 100; i++){
        let quadrato = GridElement()

        quadrato.addEventListener('click', function(){
            this.classList.toggle('active');

        } )
    griglia.append(quadrato)
    }
    
}