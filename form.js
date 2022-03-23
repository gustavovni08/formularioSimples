function checar() {

    var nome = document.getElementById("nome").value
    var s1 = document.getElementById("senha_1").value
    var s2 = document.getElementById("senha_2").value    
    var e1 = document.getElementById("email_1").value
    var e2 = document.getElementById("email_2").value
    var data = document.getElementById("data").value


   if (nome == ""){       
        
        alert("porfavor, digite o seu nome")
   
    }

   if (e1 == "" || e2 == ""){       
      
        alert("porfavor, digite o seu email")

    }

    if (s1 == "" || s2 == ""){       
      
        alert("porfavor, digite sua senha")

    }


    if (data == ""){       
        
        alert("porfavor, informe sua data de nascimento")
   
    }
   
   
    if(s1.length < 8 ){

        alert("sua senha deve conter no minimo 8 caracteres")
    
    } 
    
    if( e1 != e2 || s1 != s2){

        alert("email ou senha não conferem")
    
    }


}


function exibir() {
    
    var msg = document.querySelector(".hidden") 
    msg.style.display = 'block';
}

function esconder(){
    var msg = document.querySelector(".hidden")
    msg.style.display = 'none';

}
