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
// Automatically count calculate karne ke liye code
document.addEventListener("DOMContentLoaded", function() {
    let localCount = localStorage.getItem('global_keys_saved_v3');
    
    if (!localCount) {
        localCount = 5142; // Shuruat 5000+ se karne ke liye
        localStorage.setItem('global_keys_saved_v3', localCount);
    } else {
        localCount = parseInt(localCount);
    }

    let sessionCheck = sessionStorage.getItem('key_counted_v3');

    if (!sessionCheck) {
        localCount += 1; // Naye visit par hi badhega, baar baar refresh par nahi
        localStorage.setItem('global_keys_saved_v3', localCount);
        sessionStorage.setItem('key_counted_v3', 'true');
    }

    // Counter element agar screen par hai to number dikhao
    const counterDisplay = document.getElementById('key-count-number');
    if (counterDisplay) {
        counterDisplay.innerText = localCount;
    }
});
