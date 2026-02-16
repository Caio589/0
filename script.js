const API = "http://localhost:3000";

async function criarPix() {
  const valor = document.getElementById("valor").value;
  document.getElementById("status").innerText = "⏳ Gerando Pix...";

  const res = await fetch(`${API}/pix/cobrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ valor: parseFloat(valor) })
  });

  const data = await res.json();
  document.getElementById("status").innerText =
    "⏳ Aguardando pagamento Pix";

  carregarPagamentos();
}

async function carregarPagamentos() {
  const res = await fetch(`${API}/pix/pagamentos`);
  const pagamentos = await res.json();

  let total = 0;
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  pagamentos.forEach(p => {
    if (p.status === "paid") total += parseFloat(p.valor);

    const li = document.createElement("li");
    li.innerText =
      `${p.status === "paid" ? "✅" : "⏳"} R$ ${p.valor} — ${p.status}`;
    lista.appendChild(li);
  });

  document.getElementById("total").innerText =
    `R$ ${total.toFixed(2).replace(".", ",")}`;
}

carregarPagamentos();
setInterval(carregarPagamentos, 5000);
