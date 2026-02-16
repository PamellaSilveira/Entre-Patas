const radioNao = document.querySelector('input[value="nao"]');
const radioSim = document.querySelector('input[value="sim"]');
const listaConvenios = document.querySelector('#listaConvenios');


// Mostra ou esconde o select

radioSim.addEventListener('change', function () {

  if (radioSim.checked) {
    listaConvenios.classList.remove('hidden');
  }
});

radioNao.addEventListener('change', function () {
  if (radioNao.checked) {
    listaConvenios.classList.add('hidden');
  }
});


// Calcular descontos 

function calcular() {

  const preco = Number(document.getElementById('preco').value);
  const tipoConvenio = document.getElementById('tipoConvenio').value;
  const resultado = document.getElementById('resultado');

  // validação 

   if (!preco) {
    resultado.textContent = 'Informe o preço';
    return;
  }

  let desconto = 0;
  let valorFinal = 0;

  if (radioNao.checked) {
    desconto = preco * 0.10;
    valorFinal = preco - desconto;
    resultado.textContent = `Valor com desconto de 10%`;
  }

  else if (radioSim.checked) {

    if (tipoConvenio === "") {
      resultado.textContent = "Informe o convênio para receber desconto";
      return;
    }

    if (tipoConvenio === "amigo") {

      desconto = preco * 0.20;
      valorFinal = preco - desconto;
      resultado.textContent = `Valor com desconto de 20%`;

    }

    else if (tipoConvenio === "saude") {
      desconto = preco * 0.50;
      valorFinal = preco - desconto;
      resultado.textContent = `Valor com desconto de 50%`;
    }
  }

  resultado.textContent = `Valor final: R$ ${valorFinal.toFixed(2)}`;
}
