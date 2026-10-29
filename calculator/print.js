const quotation =
    JSON.parse(
        localStorage.getItem("quotation")
    );

document.getElementById("client").textContent =
quotation.client || "-";

document.getElementById("project").textContent =
quotation.project || "-";

document.getElementById("date").textContent =
quotation.date;

const tbody =
document.getElementById("services");

quotation.services.forEach(service=>{

    tbody.innerHTML += `

        <tr>

            <td>${service.name}</td>

            <td>${service.qty}</td>

            <td>${fmt(service.price)}</td>

            <td>${fmt(service.total)}</td>

        </tr>

    `;

});

document.getElementById("invoice").textContent =
fmt(quotation.invoice);

document.getElementById("costs").textContent =
fmt(quotation.costs);

document.getElementById("profit").textContent =
fmt(quotation.profit);

document.getElementById("recommend").textContent =
fmt(quotation.recommend);

window.onload = () => {

    window.print();

};