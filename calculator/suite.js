const API = {
    BASE_URL: "http://localhost:3000"
};

const token = localStorage.getItem("token");

// Not logged in
if (!token) {
    window.location.href = "../admin/login.html";
}

// Logout
document.getElementById("logout").addEventListener("click", () => {

    localStorage.removeItem("token");

    window.location.href = "../admin/login.html";

});

// Load current user
async function loadUser() {

    try {

        const response = await fetch(
            `${API.BASE_URL}/api/auth/me`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (response.status === 401) {

            localStorage.removeItem("token");

            window.location.href = "../admin/login.html";

            return;

        }

        const data = await response.json();

        document.getElementById("admin-email").textContent =
            data.user.email;

    } catch (error) {

        console.error(error);

        // Do NOT logout here.
        // Network errors are different from authentication errors.

    }

}

loadUser();
document
    .getElementById("exportPdf")
    .addEventListener("click", exportQuotation);
    function exportQuotation() {

    const data = {

        client:
            document.getElementById("client-name")?.value || "",

        project:
            document.getElementById("project-name")?.value || "",

        date:
            document.getElementById("project-date").value,

        invoice:
            getInvoice(),

        costs:
            getCosts(),

        profit:
            getNetProfit(),

        recommend:
            getNetProfit() * 1.4,

        services:
            getSelectedServices()

    };

    localStorage.setItem(
        "quotation",
        JSON.stringify(data)
    );

    window.open(
        "quotation.html",
        "_blank"
    );

}
function getSelectedServices() {

    const items = getItems();

    return items
        .map((item, index) => {

            if (!checked[index]) return null;

            const qty = qtys[index] || 1;

            return {

                name: item.name,

                category: item.cat,

                qty,

                price: item.price,

                total: item.price * qty

            };

        })
        .filter(Boolean);

}