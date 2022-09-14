console.log('Storage added');
localStorage.setItem('userId', 87952214);
const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value ;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

// Add to local Storage
if (id && value) {
    localStorage.setItem(id, value)}
idInput.value = '';
valueInput.value = '';

}