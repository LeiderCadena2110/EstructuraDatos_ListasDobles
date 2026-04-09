const apiUrl = 'http://127.0.0.1:5000';

async function addData() {
    const data = document.getElementById('dataInput').value;
    const response = await fetch(`${apiUrl}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });
    const result = await response.json();
    updateList(result.list);
}

async function deleteData() {
    const data = document.getElementById('dataInput').value;
    const response = await fetch(`${apiUrl}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });
    const result = await response.json();
    updateList(result.list);
}

async function fetchList() {
    const response = await fetch(`${apiUrl}/list`);
    const result = await response.json();
    updateList(result.list);
}

function updateList(list) {
    const listDisplay = document.getElementById('listDisplay');
    listDisplay.innerHTML = '';
    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listDisplay.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', fetchList);