const copyBtn = document.getElementById("copyBtn");
const keyBox = document.getElementById("key");
const toast = document.getElementById("toast");

copyBtn.addEventListener("click", async function () {

    const key = keyBox.innerText;

    try {
        await navigator.clipboard.writeText(key);
    } catch (e) {
        const textarea = document.createElement("textarea");
        textarea.value = key;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    copyBtn.innerHTML =
    '<i class="fa-solid fa-check"></i> COPIED';

    toast.style.display = "block";

    setTimeout(function () {
        toast.style.display = "none";

        copyBtn.innerHTML =
        '<i class="fa-regular fa-copy"></i> COPY ACCESS KEY';

    }, 2000);

});
