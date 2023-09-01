const botToken = '6564257493:AAEG60Ho08ekYlAQ8MsdtlWPkcsGZqgdx9E';
const chatId = '@SendOrderFormBot9';
const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
const form = document.getElementById('orderForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const tel = formData.get('tel');
  const product = formData.get('product');
  const message = `<b>You have a new order:</b>\n<b>Name</b>: <i>${name}</i>\n<b>Phone</b>: <i>${tel}</i>\n<b>Product</b>: <i>${product}</i>`;

  fetch(telegramApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Дякуємо за замовлення!');
        form.reset();
      } else {
        alert('Помилка при відправці повідомлення.');
      }
    })
    .catch(error => {
      console.error('Помилка:', error);
      alert('Сталася помилка під час відправки повідомлення.');
    });
});
