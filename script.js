let total = 0;

async function criarPix() {
  const valor = document.getElementById("valor").value;
  document.getElementById("status").innerText = "⏳ Aguardando pagamento...";

  // simulação — depois conecta com API real
  setTimeout(() => {
    document.getElementById("status").innerText = "✅ Pago";
    total += parseFloat(valor);

    const li = document.createElement("li");
    li.innerText = `Pix pago - R$ ${valor}`;
    document.getElementById("lista").appendChild(li);

    document.getElementById("total").innerText =
      `R$ ${total.toFixed(2).replace(".", ",")}`;
  }, 3000);
}
