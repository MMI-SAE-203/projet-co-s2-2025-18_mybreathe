import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-2bebetter.juline-adam.fr:443');


export async function addMood(formData) {
    try {
        const humeur = formData.get('humeur');

        console.log('Humeur sélectionnée :', humeur);

        await pb.collection('moodtracker').create({
            humeur: humeur
        });

        return {
            success: true,
            message: 'Humeur ajoutée avec succès'
        };
    } catch (error) {
        console.error('Erreur en ajoutant l\'humeur :', error);
        return {
            success: false,
            message: 'Erreur en ajoutant l\'humeur'
        };
    }
}

export async function allHumeurs() {
    const allRecords = await pb.collection('moodtracker').getFullList();
    return allRecords;
}