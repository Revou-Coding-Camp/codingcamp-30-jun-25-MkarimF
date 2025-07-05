document.addEventListener("DOMContentLoaded", function () {
  const name = prompt("Masukkan Nama Anda:");
  if (name) {
    document.getElementById("welcome").textContent = `Hi ${name}, Welcome To Website`;
  }

  const form = document.getElementById("contactForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("messageInput").value;

    if (!gender) {
      alert("Silakan pilih jenis kelamin.");
      return;
    }

    const dateNow = new Date();
    output.innerHTML = `
      <p><strong>Current time:</strong> ${dateNow.toUTCString()}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;
  });
});
