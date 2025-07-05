const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            console.log("HTTP Error:", response.statusText);
            return;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error while fetching data:", error);
        throw error;
    }
};

fetchData()
    .then(data => {
        displayCards(data);
    })
    .catch(error => {
        console.error("Caught Error:", error);
    });

function displayCards(users) {
    const container = document.getElementById("userCards");

    users.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

        container.appendChild(card);
    });
}
