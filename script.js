const video = document.getElementById('webcam');
const btn = document.getElementById('mirrorBtn');
const videoContainer = btn.querySelector('.video-container');

// 1. Initialize Webcam
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error("Camera access denied or not available", err);
        btn.querySelector('.label').textContent = "No Camera";
    }
}

startWebcam();

// 2. Parallax Effect on Hover
btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to button
    const y = e.clientY - rect.top;  // Mouse Y relative to button

    // Calculate movement (inverted for depth)
    const moveX = (x / rect.width - 0.5) * -20; 
    const moveY = (y / rect.height - 0.5) * -20;

    videoContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Reset position on leave
btn.addEventListener('mouseleave', () => {
    videoContainer.style.transform = `translate(0px, 0px)`;
});