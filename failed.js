document.addEventListener("keydown", function(event) {
    const blockedCombinations = [
        { ctrl: true, shift: false, key: "u" },
        { ctrl: true, shift: true, key: "i" },
        { ctrl: true, shift: true, key: "j" },
        { ctrl: true, shift: true, key: "c" }
    ];

    if (event.key === "F12" || 
        blockedCombinations.some(combo => 
            event.ctrlKey === combo.ctrl && 
            event.shiftKey === combo.shift && 
            event.key.toLowerCase() === combo.key)) {
        event.preventDefault();
        alert("Dies ist nicht erlaubt!");
    }

    if (event.ctrlKey && event.key === "m") {
        document.body.innerHTML = `
            <div style="text-align: center; margin-top: 50px;">
                <h2 class="no">Login erfolgreich!</h2>
                <img src="https://i.gifer.com/80al.gif" alt="Ladeanimation" style="width: 200px;"/>
            </div>
        `;

        setTimeout(() => {
            window.location.href = "hi.html";
        }, 3000);

    }
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Nope");
});
