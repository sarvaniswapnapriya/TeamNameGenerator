document.getElementById('codeForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    let category1 = document.getElementById('category1').value;
    let category2 = document.getElementById('category2').value;

    if (category1 && category2) {
        // Show loading text
        document.getElementById('code').textContent = "Generating code...";

        // Fetch generated code from server
        const response = await fetch('/generate_code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category1, category2 })
        });

        const data = await response.json();
        document.getElementById('code').textContent = data.generated_code;
    } else {
        alert('Please select two categories.');
    }
});
