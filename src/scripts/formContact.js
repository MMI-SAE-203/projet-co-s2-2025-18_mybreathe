// src/scripts/formHandler.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            prenom: form.prenom.value,
            nom: form.nom.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const response = await fetch("http://127.0.0.1:8090/api/collections/messages/records", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message envoyé avec succès !");
                form.reset();
            } else {
                alert("Une erreur est survenue.");
                console.error(await response.json());
            }
        } catch (err) {
            console.error("Erreur lors de la requête :", err);
            alert("Erreur lors de l’envoi.");
        }
    });
});
