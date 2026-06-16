console.log("Attempting to access browser features...");

try {
    localStorage.setItem("usrename","kim123");
    const pTag = document.querySelector("p");
} catch (error) {
    console.log(error);
}