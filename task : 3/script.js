document.getElementById("convertBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount)) {
        document.getElementById("result").textContent = "Please enter a valid temperature";
        return;
    }

    let camount = amount;

    if (fromCurrency !== toCurrency) {
        if (fromCurrency === "FAR")
            camount = (amount - 32) * 5 / 9;
        else if (fromCurrency === "KEL")
            camount = amount - 273.15;

        if (toCurrency === "FAR")
            camount = (camount * 9 / 5) + 32;
        else if (toCurrency === "KEL")
            camount = camount + 273.15;
    }

    document.getElementById("result").textContent =
        `${amount} ${fromCurrency} = ${camount.toFixed(2)} ${toCurrency}`;
});
