<html>
	<head>
		<title>Calculadora</title>

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

    <style>
      .calculadora {
        margin-top: 40px;
        border: solid 1px #000;
        padding: 20px;
        background-color: #2E2E2E;
        border-radius: 10px;
        box-shadow: 1px 1px 5px #000;
      }

      .btn {
        width: 60px;
        height: 50px;
        margin: 5px;
        box-shadow: 1px 1px 1px #000;
      }

      .clear {
        width: 130px;
      }

      .enter {
        height: 110px;
      }

      .zero {
        width: 130px;
      }

      .resultado {
        text-align: right;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
        border: solid 1px #000;
        box-shadow: 1px 1px 1px #000;
      }

    </style>
	</head>

  <body style="background: #D9D9D9">

    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <br />

          <div class="calculadora">
            <input id="resultado" type="text" class="form-control resultado" placeholder="0" disabled="disabled" />
            
            <div class="row">
              <button onclick="calcular('acao','c')" type="button" class="btn btn-dark btn-lg clear font-weight-light">C</button>
              <button onclick="calcular('acao','/')" type="button" class="btn btn-dark btn-lg font-weight-light">/</button>
              <button onclick="calcular('acao','*')" type="button" class="btn btn-dark btn-lg font-weight-light">x</button>
            </div>

            <div class="row">
              <button onclick="calcular('valor','7')" type="button" class="btn btn-dark btn-lg font-weight-light">7</button>
              <button onclick="calcular('valor','8')" type="button" class="btn btn-dark btn-lg font-weight-light">8</button>
              <button onclick="calcular('valor','9')" type="button" class="btn btn-dark btn-lg font-weight-light">9</button>
              <button onclick="calcular('acao','-')" type="button" class="btn btn-dark btn-lg font-weight-light">-</button>
            </div>
            
            <div class="row">
              <button onclick="calcular('valor','4')" type="button" class="btn btn-dark btn-lg font-weight-light">4</button>
              <button onclick="calcular('valor','5')" type="button" class="btn btn-dark btn-lg font-weight-light">5</button>
              <button onclick="calcular('valor','6')" type="button" class="btn btn-dark btn-lg font-weight-light">6</button>
              <button onclick="calcular('acao','+')" type="button" class="btn btn-dark btn-lg font-weight-light">+</button>
            </div>

            <div class="row">
              <button onclick="calcular('valor','1')" type="button" class="btn btn-dark btn-lg font-weight-light">1</button>
              <button onclick="calcular('valor','2')" type="button" class="btn btn-dark btn-lg font-weight-light">2</button>
              <button onclick="calcular('valor','3')" type="button" class="btn btn-dark btn-lg font-weight-light">3</button>
              <button onclick="calcular('acao','=')" type="button" class="btn btn-dark btn-lg enter">=</button>
            </div>

            <div class="row" style="margin-top: -60px">
              <button onclick="calcular('valor','0')" type="button" class="btn btn-dark zero btn-lg font-weight-light">0</button>
              <button onclick="calcular('acao','.')" type="button" class="btn btn-dark btn-lg font-weight-light">.</button>
            </div>

          </div>
        </div>
      </div>
    </div>  
    
    <script>
      function calcular(tipo, valor){
   


        if (tipo == "acao" ) {
          if (valor === 'c'){
            document.getElementById('resultado').value =""
          }
          if (valor === '+' || valor === '-' || valor ==='*' || valor === '/' || valor ==='.') {
              document.getElementById('resultado').value += valor
          }
          if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
          }
          
        }else if (tipo === "valor") {
          document.getElementById('resultado').value += valor


        }

      }

    </script>
  </body>	

</html>