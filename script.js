document.addEventListener('DOMContentLoaded', function() {
    const proposeButton = document.getElementById('proposeButton');
    const proposalBox = document.getElementById('proposalBox');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const ring = document.getElementById('ring');
    const madFace = document.getElementById('madFace');
    const retryButton = document.getElementById('retryButton');

    proposeButton.addEventListener('click', function() {
        proposalBox.style.display = 'block';
    });

    yesButton.addEventListener('click', function() {
        proposalBox.style.display = 'none';
        ring.style.display = 'block';
        madFace.style.display = 'none'; // Hide mad face if it's showing
    });

    noButton.addEventListener('click', function() {
        proposalBox.style.display = 'none';
        madFace.style.display = 'block'; // Show mad face
    });

    retryButton.addEventListener('click', function() {
        madFace.style.display = 'none';
        proposalBox.style.display = 'block';
    });

    function moveMouseAway() {
        const moveDistance = 100;
        document.body.addEventListener('mousemove', function(e) {
            const x = e.clientX + moveDistance;
            const y = e.clientY + moveDistance;
            window.scrollTo(x, y);
        }, { once: true });
    }
});
