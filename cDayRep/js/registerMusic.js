var sendRequest = function(url, data, done, err){

    var key = prompt("Insara a chave de cadastro");

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            dados = JSON.parse(this.responseText);
            if(typeof done === 'function'){
                done(dados);
            }
        }else if (this.readyState == 4 && this.status != 200){
            var data = JSON.parse(this.responseText)
            
            if(typeof err === 'function'){
                err(data);
            }
        }
    }; 
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify({key:key,data:data}));
}	
var apiUrl = "http://localhost:8080/";
var registerMusic = function(e){
    e.preventDefault();
    var form = this;

    data = {
        title: form.querySelector('input[name=title]').value, 
        letra: form.querySelector('textarea[name=letra]').value, 
        cifra: form.querySelector('textarea[name=cifra]').value
    }

    data.letra = data.letra.replace(/\n/gi,"<enter>")
    data.cifra = data.cifra.replace(/\n/gi,"<enter>")

    sendRequest(apiUrl + "musics/create", data, 
        function(){location.reload()},
        function(err){alert(err.message)})
}
var form = document.querySelector("#register-music")
form.addEventListener("submit", registerMusic)
