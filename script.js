function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    dateTimeElement.textContent = `${formattedDate} ${formattedTime}`;
}
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display the date immediately on load

function addEntry() {
    const millName = document.getElementById('millName').value;
    const storeName = document.getElementById('storeName').value;
    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;

    if (millName && storeName && item && price && quantity && date) {
        // Here you can add the code to handle the data, e.g., send it to the server or store it locally.
        alert('Entry added successfully!');
        document.getElementById('inputForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
}