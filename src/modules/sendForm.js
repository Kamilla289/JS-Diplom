const sendForm = () => {
  const form = document.forms['form-callback'];
  let statusMessage = null;
  const createStatusMessage = () => {
      if (!statusMessage) {
          statusMessage = document.createElement('div');
          statusMessage.style.color = 'red';
          statusMessage.style.marginTop = '10px';
          form.appendChild(statusMessage);
      }
  };
  form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nameValue = form['fio'].value.trim();
      const phoneValue = form['tel'].value.trim();
      const data = { name: nameValue, phone: phoneValue };
      
      if (statusMessage) {
          statusMessage.textContent = '';
      }
      createStatusMessage();
      if (!/^\+?\d+$/.test(phoneValue)) {
          statusMessage.textContent = 'Телефон может содержать только цифры и знак "+"';
          statusMessage.style.color = 'red';
          return;
      }
      if (!/^[а-яА-ЯёЁ\s]+$/.test(nameValue)) {
          statusMessage.textContent = 'Имя может содержать только кириллицу';
          statusMessage.style.color = 'red';
          return;
      }
      statusMessage.textContent = 'Отправка данных...';
      statusMessage.style.color = 'blue';

      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          if (data.id) {
              statusMessage.textContent = 'Данные успешно отправлены!';
              statusMessage.style.color = 'green';
              form.reset();
          } else {
              statusMessage.textContent = 'Ошибка при отправке данных.';
              statusMessage.style.color = 'red';
          }
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 5000);
      })
      .catch(error => {
        console.error('Ошибка при отправке:', error);
        statusMessage.textContent = 'Произошла ошибка при отправке данных.';
        statusMessage.style.color = 'red';
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 5000);
      });
  });
}

export default sendForm;