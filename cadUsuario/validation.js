$(document).ready(function() {
    $("#cadForm").on("submit", function(e) {
        e.preventDefault();
        let valid = true;
        let emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

        $("#cadForm input").each(function() {
            if ($(this).val() === "") {
                valid = false;
                $(this).addClass("is-invalid");
            } else {
                $(this).removeClass("is-invalid");
            }
        });

        let email = $("input[name='email']").val();
        if (!emailPattern.test(email)) {
            valid = false;
            $("input[name='email']").addClass("is-invalid");
        } else {
            $("input[name='email']").removeClass("is-invalid");
        }

        if (valid) {
            alert("Formulário válido e enviado com sucesso!");
        } else {
            alert("Preencha corretamente todos os campos.");
        }
    });
});
