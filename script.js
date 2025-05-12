function bestel(productNaam) {
    fetch('mail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'product=' + encodeURIComponent(productNaam)
    })
    .then(response => response.text())
    .then(data => {
        alert('Bestelling verstuurd naar Peter!');
    })
    .catch(error => {
        alert('Er ging iets mis.');
        console.error(error);
    });
}
