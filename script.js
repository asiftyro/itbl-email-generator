b_generate = document.querySelector("[name='b_generate']");
b_reset = document.querySelector("[name='b_reset']");

s_ans = document.querySelector("[name='s_ans']");
i_date = document.querySelector("[name='i_date']");
i_500 = document.querySelector("[name='i_500']");
i_502 = document.querySelector("[name='i_502']");
i_504 = document.querySelector("[name='i_504']");
i_total = document.querySelector("[name='i_total']");


f_date = document.querySelector("[name='f_date']");
f_ans = document.querySelectorAll("[name='f_ans']");
f_error = document.querySelector("[name='f_error']");
f_total_error = document.querySelector("[name='f_total_error']");



reset_i = () => {
    s_ans.value = "";
    i_date.value = "";
    i_500.value = "";
    i_502.value = "";
    i_504.value = "";
    i_total.value = "";
}
reset_f = () => {
    f_ans.forEach(element => {
        element.textContent = "";
    });
    f_error.innerHTML = "";
    f_total_error.innerHTML = "";
}

b_reset.addEventListener("click", (e) => {
    reset_i();
});
b_generate.addEventListener("click", (e) => {
    reset_f();

    if (!i_date.value) {
        alert("Date not set.");
        return;
    }

    if (!s_ans.value) {
        alert("ANS not set.");
        return;
    }
    if (!i_500.value && !i_502.value && !i_504.value) {
        alert("Error(s) not set.");
        return;
    }


    f_ans.forEach(element => {
        element.textContent = s_ans.value;
    });

    f_date.textContent = i_date.value;

    f_error.innerHTML = "Error Count Statistics:"
    total_error = 0;
    if (i_500.value) {
        total_error += parseInt(i_500.value);
        f_error.innerHTML += `<br> HTTP Error: ${i_500.value.padStart(5, "0")} instance(s)`;
    }
    if (i_502.value) {
        total_error += parseInt(i_502.value);
        f_error.innerHTML += `<br> HTTP Error 502: ${i_502.value.padStart(5, "0")} instance(s)`;
    }
    if (i_504.value) {
        total_error += parseInt(i_504.value);
        f_error.innerHTML += `<br> HTTP Error 504: ${i_504.value.padStart(5, "0")} instance(s)`;
    }

    if (total_error) {
        f_error.innerHTML += `<br> Total HTTP Error(s): ${String(total_error).padStart(5, "0")} instance(s)`;
        f_total_error.innerHTML = total_error
    }
    if (i_total.value) {
        f_error.innerHTML += `<br> [<i>out of Total: ${String(i_total.value).padStart(5, "0")} instance(s)</i>]`;
    }

    reset_i()
});