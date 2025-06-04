import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-2bebetter.juline-adam.fr:443');

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titre = document.getElementById('titre').value;
    const message = document.getElementById('message').value;

    const data = {
        titre,
        message,
        date: new Date().toISOString()
    };

    try {
        const record = await pb.collection('temoignages').create(data);
        alert('Témoignage envoyé avec succès !');
        form.reset();
    } catch (err) {
        console.error('Erreur lors de l\'envoi :', err);
        alert('Erreur lors de l\'envoi du témoignage.');
    }
});
