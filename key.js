// ===== Copy Key Button =====

const copyBtn = document.getElementById("copyBtn");
const keyBox = document.getElementById("key");
const toast = document.getElementById("toast");

copyBtn.addEventListener("click", async () => {

    const key = keyBox.innerText;

    try {

        await navigator.clipboard.writeText(key);

        toast.style.display = "block";

        copyBtn.innerHTML =
        '<i class="fa-solid fa-check"></i> COPIED';

        setTimeout(() => {

            toast.style.display = "none";

            copyBtn.innerHTML =
            '<i class="fa-regular fa-copy"></i> COPY ACCESS KEY';

        }, 2000);

    } catch (err) {

        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = key;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        toast.style.display = "block";

        setTimeout(() => {
            toast.style.display = "none";
        }, 2000);
    }

});

// ===== Card Animation =====

const card = document.querySelector(".card");

card.animate(
[
{transform:"translateY(10px)"},
{transform:"translateY(-10px)"},
{transform:"translateY(10px)"}
],
{
duration:4000,
iterations:Infinity
}
);
