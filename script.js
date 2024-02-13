const increasedButton = document.getElementById("increase");
const targetButton = document.getElementById("target");

targetButton.addEventListener('click', () =>
{   
    const currentWidth = parseInt(increasedButton.style.width) || 100; // Default width
            const currentHeight = parseInt(increasedButton.style.height) || 40; // Default height
            const newWidth = currentWidth + 100; // Increase width by 10 pixels
            const newHeight = currentHeight + 100; // Increase height by 5 pixels

            // Apply the new sizes
            increasedButton.style.width = newWidth + 'px';
            increasedButton.style.height = newHeight + 'px';
});
increasedButton.addEventListener('click', ()=>
{
    alert('Iupiiiiiiiiii!!!!!!!!!!!!!!!!!!');
});