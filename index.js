
document.addEventListener('DOMContentLoaded', function () {
    var string = "";
    var display = document.querySelector('input');

    function updateDisplay() {
        display.value = string;
    }

    function handleButtonClick(value) {
        if (value === "=") {
            string = eval(string);
            updateDisplay();
        } else if (value === "C") {
            string = "";
            updateDisplay();
        }
        else if (value === "AC"){
            string = string.slice(0,-1);
            updateDisplay();
        }
        
        else {
            string = string + value;
            updateDisplay();
        }
    }

    var buttons = document.querySelectorAll(".buttons");
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            handleButtonClick(e.target.innerHTML);
        });
    });

    document.addEventListener('keydown', function (e) {
        var key = e.key;

        if ((key >= '0' && key <= '9') || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
            handleButtonClick(key);
        } else if (key === 'Enter') {
            handleButtonClick('=');
        } else if (key === 'Escape') {
            handleButtonClick('C');
        }
        else if(key === 'Backspace'){
            handleButtonClick('AC')
        }
    });
});
