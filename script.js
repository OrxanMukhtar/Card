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

// Ziyaretçi sayısını al ve artır
let visitCount = localStorage.getItem('visitCount');

// Ziyaretçi sayısı yoksa, 1'den başla
if (visitCount === null) {
    visitCount = 0;
}

// Ziyaretçi sayısını artır
visitCount++;

// Ziyaretçi sayısını LocalStorage'da sakla
localStorage.setItem('visitCount', visitCount);

// Ziyaretçi sayısını ekrana yazdır
document.getElementById('visitCounter').textContent = `You have visited this page   ${visitCount} times.`;
