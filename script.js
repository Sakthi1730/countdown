document.addEventListener('DOMContentLoaded', function () {
    var countdownContainer = document.getElementById('countdown-container');

    function countdown(number, callback) {
        if (number > 0) {
            countdownContainer.textContent = number;
            setTimeout(function () {
                countdown(number - 1, callback);
            }, 1000);
        } else {
            callback();
        }
    }

    countdown(10, function () {
        setTimeout(function () {
            countdownContainer.textContent = "Happy Independence Day";
        }, 1000);
    });
});
