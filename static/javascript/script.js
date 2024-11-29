function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

html = '<h1 style="border: 3px solid #1E90FF; border-radius: 5px; background: linear-gradient(90deg, #1E90FF, #87CEFA); color: white; padding: 10px; text-align: center; font-family: Arial, sans-serif; font-size: 1.5rem;">Estás usando un TIPO</h1>';

if (isMobileDevice()) {
    document.getElementById('tipo-navegador').innerHTML = html.replace('TIPO', 'navegador de dispositivo móvil');
} else {
    document.getElementById('tipo-navegador').innerHTML = html.replace('TIPO', 'navegador de escritorio');
}
