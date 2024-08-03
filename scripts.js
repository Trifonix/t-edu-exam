document.getElementById('download-button').addEventListener('click', function() {
    downloadPDF();
    sendWebhookNotification();
});

function downloadPDF() {
    const element = document.body;
    const opt = {
        margin:       0.5,
        filename:     'document.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

function sendWebhookNotification() {
    const webhookURL = process.env.ALBATO_WEBHOOK_URL;

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ event: 'button_pressed', data: { message: 'Button was pressed' } })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Webhook sent:', data);
    })
    .catch(error => {
        console.error('Error sending webhook:', error);
    });
}
