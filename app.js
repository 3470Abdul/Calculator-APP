    function sqrt() {
        var val = document.getElementById("ro").value;
        document.getElementById("ro").value = "√(" + val + ")";
    }

    function c(val) {
        document.getElementById("ro").value = val;
    }

    function v(val) {
        document.getElementById("ro").value += val;
    }

    function e() {
        try {
            var toEval = document.getElementById("ro").value.replace("√", "Math.sqrt");
            c(eval(toEval))
        } catch (e) {
            c('Error')
        }
    }