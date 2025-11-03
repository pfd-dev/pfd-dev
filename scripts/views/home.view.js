import copyEmail from "../utils/copyEmail.js";

export default function homeView() {
    document.querySelector(".email-link").addEventListener("click", copyEmail);
}