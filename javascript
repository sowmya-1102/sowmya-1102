document.getElementById('generateButton').addEventListener('click', generateResume);

function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumeHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>

        <h2>Education</h2>
        <p>${education}</p>

        <h2>Work Experience</h2>
        <p>${experience}</p>

        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    const previewDiv = document.getElementById('preview');
    const resumeDiv = document.getElementById('resume');

    resumeDiv.innerHTML = resumeHTML;
    previewDiv.style.display = 'block';
}
