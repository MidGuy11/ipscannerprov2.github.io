function downloadFile() {
    const link = document.createElement('a');
    link.href = 'https://github.com/MidGuy11/Download/releases/download/Download/Client.zip';
    link.download = 'Client.zip';  // The file name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
