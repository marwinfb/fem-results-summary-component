document.addEventListener('DOMContentLoaded', () => {
    fetch('/js/data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((result, index) => {
                const resultEl = document.getElementById(`result-${index + 1}`);
                if (resultEl) {
                    const resultScore = resultEl.querySelector('.list__item-score');
                    const resultCategory = resultEl.querySelector('.list__item-category');
                    const resultIcon = resultEl.querySelector('.list__item-icon');
                    resultScore.textContent = result.score;
                    resultCategory.textContent = result.category;
                    resultIcon.src = result.icon;
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
