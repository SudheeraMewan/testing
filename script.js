const onSearch = () => {
    const input = document.querySelector("#search");
    const filter = input.value.toUppercase();

    const list = document.querySelectorAll("#list li");

    list.forEach => {
        const text = el.textContent.toUppercase();
        el.style.display = text.includes(filter) ? "" : "none";

    });
}