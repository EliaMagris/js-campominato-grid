function startGame(){ 

    const Number = document.getElementById("gameMod").value;

    const griglia = document.getElementById("griglia");
    
    griglia.innerHTML ="";

    function GridElement(){
      let item = document.createElement('div');
      item.classList.add('quadrati');
      return item 
    }
    

    for(let i = 0; i < Number; i++) {
        
        let quadrato = GridElement()
        
        

        quadrato.addEventListener('click', function(){
            console.log(this);
            this.classList.toggle('active');
        })

        quadrato.innerText = i + 1;
        console.log(quadrato)

        griglia.append(quadrato)
    }
    
}

