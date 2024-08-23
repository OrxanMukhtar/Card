function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const message = document.getElementById('copyMessage');
        message.textContent = `${text} copyed!`;
        message.classList.add('show');
        
        setTimeout(() => {
            message.classList.remove('show');
        }, 2000);
    });
}
