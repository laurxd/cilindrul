function calculateVolume() {
    let height = parseFloat(document.getElementById('height').value);
    let radius = parseFloat(document.getElementById('radius').value);
  
    let volume = Math.PI * radius ** 2 * height;
  
    document.getElementById('outputDiv').innerHTML =
      'Volumul este: ' + volume.toFixed(2);
  }