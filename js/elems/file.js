
/**
 * Обработчик нажатия на поле загрузки файла.
 */
export function clickInputDownloadFile(){
    let fileInput = document.getElementById('file');
    let fileLabel = document.querySelector('.file__custom-label');


    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            fileLabel.querySelector('.file__custom-label-text').textContent = fileInput.files[0].name;
        }
    });

}