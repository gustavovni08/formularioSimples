jQuery(function($){
    $("#telefone").mask("+99 (99) 99999-9999")
})



function checar() {

    var nome = document.getElementById("nome").value
    
    var s1 = document.getElementById("senha_1").value
    var s2 = document.getElementById("senha_2").value    
    
    var e1 = document.getElementById("email_1").value
    var e2 = document.getElementById("email_2").value

    var data = document.getElementById("data").value

   
    if(s1.length < 8 ){
        alert("sua senha deve conter no minimo 8 caracteres")
    }
    
    var upper = /[A-Z]/;
    var down = /[a-z]/; 
    var num = /[0-9]/;
    var spc = /[!|@|#|$|%|^|&|*|(|)|-|_]/;


    if(down.test(s1)){
       return
    } else {
        alert('sua senha deve conter caracteres em minusculo')
    }

    if(upper.test(s1)){
        return
     } else {
         alert('sua senha deve conter caracteres em minusculo')
     }

     if(num.test(s1)){
        return
     } else {
         alert('sua senha deve conter caracteres em minusculo')
     }

     if(spc.test(s1)){
        alert('sua senha não pode conter caracteres especiais ex: !|@|#|$|%|^|&|*|(|)|-|_')
     }

    
    if( e1 != e2 || s1 != s2){
        alert("email ou senha não conferem")
    }

    if(cb != "True"){
        alert('você deve aceitar os termos de serviço para realizar o cadastro')
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
