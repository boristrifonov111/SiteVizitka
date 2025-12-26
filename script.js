// Генерация QR-кода при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    
    // Генерация QR-кода
    const qrcodeContainer = document.getElementById('qrcode');
    
    if (qrcodeContainer && typeof QRCode !== 'undefined') {
        // Получаем текущий URL страницы
        const currentUrl = window.location.href;
        
        // Создаем canvas элемент для QR-кода
        const canvas = document.createElement('canvas');
        qrcodeContainer.appendChild(canvas);
        
        // Генерируем QR-код
        QRCode.toCanvas(canvas, currentUrl, {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        }, function (error) {
            if (error) {
                console.error('Ошибка генерации QR-кода:', error);
                qrcodeContainer.innerHTML = '<p style="color: red;">Ошибка генерации QR-кода</p>';
            }
        });
    }
});

