document.addEventListener("mousemove", (e) => {
    const cursorFollower = document.getElementById("cursor-follower");
    const lag = 20; // Adjust the lag value to your preference

    // Calculate the new position with a bit of lag
    const newX = e.clientX - lag / 2;
    const newY = e.clientY - lag / 2;

    cursor.style.transform = `translate(${e.clientX - 1 + window.scrollX}px, ${e.clientY - 1 + window.scrollY}px)`;

    // Apply the new position to the cursor follower
    cursorFollower.style.transform = `translate(${newX + window.scrollX}px, ${newY + window.scrollY}px)`;
});