document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('history-list');

    const historyData = [
        {
            type: 'Diagnosis',
            date: '2024-06-15',
            details: 'Diagnosed with Type 2 Diabetes.'
        },
        {
            type: 'Medicine',
            date: '2024-06-16',
            details: 'Prescribed Metformin.'
        },
        {
            type: 'Call',
            date: '2024-06-17',
            details: 'Follow-up call to discuss medication adherence.'
        },
        {
            type: 'Quote',
            date: '2024-06-18',
            details: 'Patient feels optimistic about managing their condition.'
        }
    ];

    historyData.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        const title = document.createElement('h3');
        title.textContent = `${item.type} - ${item.date}`;
        historyItem.appendChild(title);

        const details = document.createElement('p');
        details.textContent = item.details;
        historyItem.appendChild(details);

        historyList.appendChild(historyItem);
    });

    // Simulating progress bar fill based on example data
    const progressDiagnosis = document.querySelector('.progress.diagnosis');
    const progressMedicine = document.querySelector('.progress.medicine');
    const progressCalls = document.querySelector('.progress.calls');

    // Update the widths dynamically (example values)
    setTimeout(() => {
        progressDiagnosis.style.width = '80%';
        progressMedicine.style.width = '60%';
        progressCalls.style.width = '95%';
    }, 1000);
});
