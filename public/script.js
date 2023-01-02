console.log("Hello World");
alert("Clone this repo to see the results, As OpenAi api does not allow to use their api for Production.")

function handleSubmit(e) {
    e.preventDefault();
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';
    const prompt = document.querySelector("#prompt").value;
    const size = document.querySelector("#size").value;
    if (prompt === '') {
        alert("Please add some text")
        return;
    }
    generateImage(prompt, size);
}

async function generateImage(prompt, size) {
    try {
        showSpinner();
        const response = await fetch('/api/getimage', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        })
        if (!response.ok) { removeSpinner(); throw new Error('That image could not be generated') }
        const data = await response.json();
        // console.log(data);
        const imageUrl = data.data
        document.querySelector('#image').src = imageUrl;
        removeSpinner();
    } catch (error) {
        document.querySelector('.msg').textContent = error;
        console.log(error);
    }
}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show')
}

function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show')
}

document.querySelector("#image-form").addEventListener('submit', handleSubmit)