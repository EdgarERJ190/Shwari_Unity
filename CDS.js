document.addEventListener('DOMContentLoaded', () => {
    const ageSlider = document.getElementById('ageSlider');
    const ageDisplay = document.getElementById('ageDisplay');
    const childImage = document.getElementById('childImage');
    const milestonesList = document.getElementById('milestonesList');
    const immunizationList = document.getElementById('immunizationList');

    const milestones = {
        0: ['Newborn - Reflexes, crying'],
        1: ['1 year - Walking, first words'],
        2: ['2 years - Running, short sentences'],
        5: ['5 years - School readiness, basic reading'],
        12: ['12 years - Adolescence begins'],
        18: ['18 years - Adulthood']
    };

    const immunizations = {
        0: ['Hepatitis B - Birth'],
        2: ['DTaP, Hib, Polio - 2 months'],
        4: ['DTaP, Hib, Polio - 4 months'],
        6: ['Hepatitis B - 6 months'],
        12: ['MMR, Varicella - 1 year'],
        18: ['Meningococcal - 16-18 years']
    };

    ageSlider.addEventListener('input', () => {
        const age = ageSlider.value;
        ageDisplay.textContent = age;
        updateChildImage(age);
        updateMilestones(age);
        updateImmunizations(age);
    });

    function updateChildImage(age) {
        if (age <= 2) {
            childImage.src = 'img/child_0.png';
            childImage.style.width = '200px';
        } else if (age <= 5) {
            childImage.src = 'img/child_2.png';
            childImage.style.width = '300px';
        } else if (age <= 12) {
            childImage.src = 'img/child_5.png';
            childImage.style.width = '400px';
        } else {
            childImage.src = 'img/child_12.png';
            childImage.style.width = '500px';
        }
    }

    function updateMilestones(age) {
        milestonesList.innerHTML = '';
        for (let milestoneAge in milestones) {
            if (age >= milestoneAge) {
                milestones[milestoneAge].forEach(milestone => {
                    const li = document.createElement('li');
                    li.textContent = milestone;
                    milestonesList.appendChild(li);
                });
            }
        }
    }

    function updateImmunizations(age) {
        immunizationList.innerHTML = '';
        for (let immunizationAge in immunizations) {
            if (age >= immunizationAge) {
                immunizations[immunizationAge].forEach(immunization => {
                    const li = document.createElement('li');
                    li.textContent = immunization;
                    immunizationList.appendChild(li);
                });
            }
        }
    }

    // Initial update
    updateChildImage(0);
    updateMilestones(0);
    updateImmunizations(0);
});
