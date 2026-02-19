function drawCircles() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const radius = 25;

    for (let i = 1; i <= 10; i++) {
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "#3498db"; 
        ctx.fill();
        ctx.strokeStyle = "#2980b9";
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = "white";
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(i, x, y); 
    }
}

window.onload = drawCircles;