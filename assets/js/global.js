const cursorFollower = document.getElementById("cursor-follower");

document.addEventListener("mousemove", (e) => {
    const lag = 20; // Adjust the lag value to your preference

    // Calculate the new position with a bit of lag
    const newX = e.clientX - lag / 2;
    const newY = e.clientY - lag / 2;

    // Apply the new position to the cursor follower
    cursorFollower.style.transform = `translate(${newX + window.scrollX + 1}px, ${newY + window.scrollY + 1}px)`;
});