document.getElementById('loadItems').addEventListener('click', () => {
    const baseUrl = `${window.location.protocol}//${window.location.host}`;

    fetch(`${baseUrl}/items`)
        .then(response => response.json())
        .then(data => {
            const itemsList = document.getElementById('itemsList');
            itemsList.innerHTML = ''; // Clear current list
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name;
                itemsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching items:', error));

    console.log("API called!");
});