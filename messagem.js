window.addEventListener('load', function () {
    emailjs.init('2Sr6BC9drHhpdIq-S');

    const form = document.getElementById('contact-form');
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;

        let icon = "✔️";
        if (type === "error") icon = "❌";

        toast.innerHTML = `<i>${icon}</i>${message}`;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 10000); // 10 segundos
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('portofolio_service_gwcw8', 'template_rivk42w', {
            from_name: name,
            from_email: email,
            message: message,
        }).then(function () {
            showToast("Mensagem enviada com sucesso!", "success");
            form.reset();
        }).catch(function () {
            showToast("Erro ao enviar a mensagem. Tente novamente.", "error");
        });
    });
});
