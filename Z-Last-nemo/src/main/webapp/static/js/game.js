document.addEventListener("DOMContentLoaded", () => {
  const form_container = document.querySelector(
    ".main-form-container"
  );
  const input_check_all = document.querySelectorAll(
    "input[type='checkbox']"
  );
  form_container.addEventListener("click", (e) => {
    const target = e.target;
    if ((target.checked = "checked")) {
      target.value = 1;
    } else {
      target.value = 0;
    }

    console.log(target.value);
  });
});
