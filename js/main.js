function consultaCep() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show(); // o formulario aparece quamdo é feito a consulta
            $(".barra-progresso").hide();
            
            //document.getElementById("").innerHTML = response.uf;
            //alert(response.logradouro); 
        }
    })
}

$(function() {
    $(".cep").hide(); // inicia com formulario oculto
    $(".barra-progresso").hide();
});