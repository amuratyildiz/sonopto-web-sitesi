(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var status = document.getElementById('contact-form-status');
  var successMessage = form.dataset.successMessage;
  var errorMessage = form.dataset.errorMessage;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    status.classList.add('hidden');

    var formData = new FormData(form);
    var payload = {};
    formData.forEach(function (value, key) {
      payload[key] = value;
    });

    fetch('/api/contact-submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Request failed');
        status.textContent = successMessage;
        status.classList.remove('hidden', 'text-red-600');
        status.classList.add('text-green-700');
        form.reset();
      })
      .catch(function () {
        status.textContent = errorMessage;
        status.classList.remove('hidden', 'text-green-700');
        status.classList.add('text-red-600');
      })
      .finally(function () {
        submitButton.disabled = false;
      });
  });
})();
