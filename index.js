const colorBtn = document.getElementById('color-btn');

colorBtn.addEventListener('click', function(){
    const head = document.getElementById("head").value.slice(1)
    const selectColor = document.getElementById("select-color").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${head}&mode=${selectColor.toLowerCase()}&count=5`)
    .then(res => res.json())
    .then(data => {
        let html = ''
        data.colors.forEach(color =>{
            html += `
            <div class="colors-bar-div">
                <div class="stripe-section" style="background-color: ${color.hex.value}"></div>
                <div class="hexcode-section">${color.hex.value}</div>
            </div>
            `
        })
        
        document.getElementById('color-scheme-section').innerHTML = html
    })   
    .catch(error => {
        console.error(error);
        alert("Failed to fetch color scheme. Please try again later.");
    });
});