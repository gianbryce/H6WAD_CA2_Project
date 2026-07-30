function calculateElectricity() {
    // Retrieves the appliance's power draw in watts
    const wattage = document.getElementById("wattage").value;

    // Retrieves the number of hours of usage
    const usage = document.getElementById("usage").value;

    // Gets the price value for cost of electricity in euros
    const pricePerKwh = document.getElementById("pricePerKwh").value;

    // Convert to kilowatts (1kW is equivalent to 1000W)
    const kilowatts = wattage / 1000;

    // Calculate kilowatts used per hour
    const kilowattHours = kilowatts * usage;

    // Calculate the total cost in euros
    const totalPrice = kilowattHours * pricePerKwh;

    //Output the results
    document.getElementById("results").textContent = "Results: €" + totalPrice;
}