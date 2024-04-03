$(document).ready(function() {
    // Add event listeners for arrow keys
    document.addEventListener('keydown', (event) => {
        let keyCode = event.code;
        console.log(keyCode);

    	switch(keyCode) {
            case 'ArrowUp':
                document.getElementById('pikachu').className="up";
                break;
            case 'ArrowDown':
                document.getElementById('pikachu').className="down";
                break;
            case 'ArrowLeft':
                document.getElementById('pikachu').className="left";
                break;
            case 'ArrowRight':
                document.getElementById('pikachu').className="right";
                break;
        }

    // stop keys from returning anything
    return false;

    });

    $('#buttonUp').click(function() {
        document.getElementById('pikachu').className="up";
    });

    $('#buttonDown').click(function() {
        document.getElementById('pikachu').className="down";
    });

    $('#buttonLeft').click(function() {
        document.getElementById('pikachu').className="left";
    });

    $('#buttonRight').click(function() {
        document.getElementById('pikachu').className="right";
    });

});
