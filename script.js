const button = document.getElementById('showPlanets');
const tableContainer = document.getElementById('planetTable');

button.addEventListener('click', () => {
    fetch('/data.json')
     .then(response => {
       if (!response.ok) {
         throw new Error(`Ошибка HTTP! Код состояния: ${response.status}, Текст ошибки: ${response.statusText}`);
       }
       return response.json();
     })
     .then(data => {
       tableContainer.innerHTML = createTable(data);
     })
     .catch(error => {
       console.error('Ошибка:', error); // выводит в консоль текст ошибки
       tableContainer.innerHTML = `<p>Ошибка загрузки данных: ${error.message}</p>`; // выводит текст ошибки на страницу
     });
  });

  function createTable(planets) {
    if (!planets || planets.length === 0) {
      return "<p>Данные отсутствуют</p>"; // Обработка пустого массива
    }
    let tableHTML = `<table><tr><th>Планета</th><th>Размер</th></tr>`;
    planets.forEach(planet => {
      tableHTML += `<tr><td>${planet.planet || 'Неизвестно'}</td><td>${planet.size || 'Неизвестно'}</td></tr>`; // Добавлена обработка отсутствующих данных
    });
    tableHTML += '</table>';
    return tableHTML;
  }