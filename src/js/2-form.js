const form = document.querySelector('.feedback-form');
const localStorageMassage = "message-example";
const localStorageEmail = "email-example";

form.message.value = localStorage.getItem(localStorageMassage) ?? "";
form.email.value = localStorage.getItem(localStorageEmail) ?? "";

form.addEventListener("input",() => {
    localStorage.setItem(localStorageMassage, form.message.value);
    localStorage.setItem(localStorageEmail, form.email.value);
});


form.addEventListener("submit", (evt) => {
    if(form.message.value === "" || form.email.value === "")
    {
        return alert("Fill please all fields");
    }
    else{
        evt.preventDefault();
        localStorage.removeItem(localStorageMassage);
        localStorage.removeItem(localStorageEmail);
        form.reset();
    }
});