<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BSVR List</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4191003243885875"
     crossorigin="anonymous"></script>
    <style>
        /* For Dark Mode */
        body.dark-mode {
            background-color: #1a202c;
            color: #a0aec0;
        }

        body.dark-mode .event-box {
            background-color: #2d3748;
            border-color: #4a5568;
            color: #a0aec0;
        }

        .dark-mode .popup-form {
            background-color: #2d3748 !important;
            color: #a0aec0 !important;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 9999px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: #2196F3;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
            transform: translateX(24px);
        }

        /* Popup form adjustments */
        .popup-form {
            background-color: #ffffff;
            color: #000000;
            max-height: 80vh; /* 80% of viewport height */
            max-width: 90vw;  /* 90% of viewport width */
            overflow-y: auto; /* Enable vertical scrolling if content overflows */
        }

        /* Ensure all images have the same size */
        .event-box img {
            width: 100%;
            height: 200px; /* You can adjust height as needed */
            object-fit: cover; /* Ensures the aspect ratio is maintained and the image is covered */
        }
    </style>
</head>
<body class="bg-gray-100 text-gray-800 h-screen overflow-y-scroll">
<header class="bg-blue-500 p-4 text-white flex flex-col items-center sm:flex-row sm:justify-between">
    <div>
        <h1 class="text-2xl font-bold">BSVR List</h1>
        <p class="text-lg">List your BIGScreen VR event for the world to see 👀</p>
    </div>
    <div class="flex mt-2 sm:mt-0 space-x-4">
        <div class="flex items-center space-x-2">
            <span class="text-sm">Dark Mode:</span>
            <label class="relative inline-block w-10 h-6">
                <input type="checkbox" id="darkModeToggle" class="opacity-0 w-0 h-0">
                <span class="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-200 transition duration-300"></span>
            </label>
        </div>
        <div class="flex items-center space-x-2">
            <span class="text-sm">NSFW:</span>
            <label class="relative inline-block w-10 h-6">
                <input type="checkbox" id="nsfwCheck" class="opacity-0 w-0 h-0">
                <span class="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-200 transition duration-300"></span>
            </label>
        </div>
    </div>
</header>
<main class="p-4 relative">
    <button id="createPostBtn" class="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full w-14 h-14 text-4xl flex items-center justify-center shadow-lg transition transform hover:scale-105 z-50">+</button>
    <div id="popupForm" class="fixed inset-0 hidden bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div class="popup-form-wrapper h-full w-full flex items-center justify-center p-4">
            <div class="popup-form bg-white rounded-lg shadow-lg overflow-hidden w-11/12 max-w-md relative p-6">
                <button id="closeBtn" class="absolute top-4 right-4 text-gray-600 text-2xl font-bold">&times;</button>
                <h2 class="text-2xl font-bold mb-4">Create BigScreen Event</h2>
                <form id="eventForm" class="space-y-4">
                    <div>
                        <label for="userName" class="block text-sm font-semibold">BigScreen User Name:<span class="text-red-500">*</span></label>
                        <input type="text" id="userName" name="entry.454617430" class="w-full p-2 border rounded" required>
                    </div>
                    <div>
                        <label for="eventTitle" class="block text-sm font-semibold">Title of the Event:<span class="text-red-500">*</span></label>
                        <input type="text" id="eventTitle" name="entry.961002275" class="w-full p-2 border rounded" required>
                    </div>
                    <div>
                        <label for="description" class="block text-sm font-semibold">Description:</label>
                        <textarea id="description" name="entry.1471251666" class="w-full p-2 border rounded"></textarea>
                    </div>
                    <div>
                        <label for="eventDate" class="block text-sm font-semibold">Date of Event:<span class="text-red-500">*</span></label>
                        <input type="date" id="eventDate" name="entry.727641125" class="w-full p-2 border rounded" required>
                    </div>
                    <div>
                        <label for="eventTime" class="block text-sm font-semibold">Time of Event:<span class="text-red-500">*</span></label>
                        <input type="time" id="eventTime" name="entry.2101175075" class="w-full p-2 border rounded" required>
                    </div>
                    <div>
                        <label for="timezone" class="block text-sm font-semibold">Time Zone:</label>
                        <select id="timezone" name="entry.1344278789" class="w-full p-2 border rounded">
                            <!-- Timezone options will be dynamically added here -->
                        </select>
                    </div>
                    <div>
                        <label for="posterLink" class="block text-sm font-semibold">Poster Image Link:</label>
                        <input type="text" id="posterLink" name="entry.862199884" class="w-full p-2 border rounded">
                    </div>
                    <div>
                        <label for="roomCode" class="block text-sm font-semibold">Room Code:</label>
                        <input type="text" id="roomCode" name="entry.838078531" class="w-full p-2 border rounded">
                    </div>
                    <div>
                        <label for="nsfw" class="block text-sm font-semibold">NSFW:</label>
                        <input type="checkbox" id="nsfw" name="entry.1798898122" value="NSFW">
                    </div>
                    <div class="flex justify-end space-x-4">
                        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Submit</button>
                        <button type="button" id="closeFormBtn" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="event-container mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="eventContainer">
        <!-- Events will be dynamically added here -->
    </div>
</main>
<footer class="text-center mt-12 text-gray-600">
    <p>Note: This site is not official, this is a fan-made site by <a href="https://www.akshaycodes.co" class="text-blue-500 hover:underline">www.akshaycodes.co</a>, feedback is appreciated!</p>
</footer>
<script>
    // Function to format date and time
    function formatDate(dateString) {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1); // Increase date by one day
        return date.toISOString().split('T')[0]; // Extract only the date part
    }

    function formatTime(timeString) {
        const time = new Date(timeString);
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`; // Format time as HH:MM
    }

    const createPostBtn = document.getElementById("createPostBtn");
    const popupForm = document.getElementById("popupForm");
    const closeBtn = document.getElementById("closeBtn");
    const closeFormBtn = document.getElementById("closeFormBtn");
    const eventForm = document.getElementById("eventForm");
    const eventContainer = document.getElementById("eventContainer");
    const timezoneSelect = document.getElementById("timezone");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const nsfwCheck = document.getElementById("nsfwCheck");

    // Toggle dark mode
    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        eventContainer.classList.toggle("dark-mode"); // Toggle dark mode for event container
        popupForm.classList.toggle("dark-mode"); // Toggle dark mode for popup form
    });

    // Populate timezone dropdown
    fetch("https://worldtimeapi.org/api/timezone")
        .then(response => response.json())
        .then(timezones => {
            timezones.forEach(timezone => {
                const option = document.createElement('option');
                option.value = timezone;
                option.textContent = timezone.replace(/_/g, ' '); // Replace underscores with spaces
                timezoneSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching timezones:', error));

    createPostBtn.addEventListener("click", () => {
        popupForm.classList.remove('hidden');
    });

    closeBtn.addEventListener("click", () => {
        popupForm.classList.add('hidden');
    });

    closeFormBtn.addEventListener("click", () => {
        popupForm.classList.add('hidden');
    });

    eventForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(eventForm);
        
        fetch("https://docs.google.com/forms/d/1hTfbKXO93gke7orfjpWbWr4c1dGnHnHKtXguzfbeZp0/formResponse", {
            method: "POST",
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Form submission failed with status ${response.status}`);
                }
                popupForm.classList.add('hidden');
                alert("Event created successfully!");
            })
            .catch(error => {
                console.error("Event created successfully!", error);
                alert("Now, refresh the site to see the your event.");
            });
    });

    // Function to fetch and display events
    const fetchEvents = () => {
        fetch("https://script.googleusercontent.com/macros/echo?user_content_key=C5CKtO5s9YGMygM11EdqRI2RS23I6qUmrTfWJuqrD8rX51hPLKTqlgMndb-HbtBUErWs6dPZNHvHSMlMpQvyjEY-MHbiGGw-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPAQu8mo-25AaFE6AzgdhsathN9XFTtzZLCjcP-uTsBXI5V3GJ3qBqo56acbopKwjbdJXIjloRcSGcy-kJRp821brzGeksYCJg&lib=MpUOcUJ_6w0Kqu_wwMCTjtdPQdUVmbJYJ")
            .then(response => response.json())
            .then(events => {
                events.forEach(event => {
                    const eventBox = document.createElement('div');
                    eventBox.classList.add('event-box', 'bg-white', 'border', 'rounded-lg', 'p-4', 'hover:bg-gray-100', 'relative');
                    const image = document.createElement('img');
                    const posterLink = event['Poster Image Link'] ? event['Poster Image Link'] : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
                    image.src = posterLink;
                    image.classList.add('rounded-lg', 'mb-4');
                    const title = document.createElement('p');
                    title.textContent = event['Title of the event'];
                    title.classList.add('font-bold', 'text-lg');
                    const date = document.createElement('p');
                    date.textContent = 'Date: ' + formatDate(event['Date of Event']); // Format date
                    const time = document.createElement('p');
                    time.textContent = 'Time: ' + formatTime(event['Time of Event']); // Format time
                    const timeZone = document.createElement('p');
                    timeZone.textContent = 'Time Zone: ' + event['Time Zone ']; // Display Time Zone
                    const userName = document.createElement('p');
                    userName.textContent = 'User Name: ' + event['BigScreen User Name'];
                    const nsfw = document.createElement('p');
                    nsfw.textContent = 'NSFW: ' + event['NSFW'];
                    const roomCode = document.createElement('p');
                    roomCode.textContent = 'Room Code: ' + event['Room code'];
                    const description = document.createElement('div');
                    description.classList.add('event-details', 'hidden', 'mt-2');
                    description.textContent = 'Description: ' + event['Description'];

                    if (event['NSFW'] === "NSFW") {
                        eventBox.setAttribute('data-nsfw', 'true');
                        eventBox.style.display = 'none'; // Hide NSFW event box by default
                    }

                    // Copy button
                    const copyButton = document.createElement('button');
                    copyButton.textContent = '📋';
                    copyButton.classList.add('copy-button', 'absolute', 'bottom-4', 'right-4', 'bg-blue-500', 'text-white', 'rounded', 'px-3', 'py-1', 'hover:bg-blue-700', 'transition');
                    copyButton.addEventListener('click', (e) => {
                        const additionalText = "List your BIGScreen VR event for the world to see 👀";
                        const websiteURL = "https://bsvrlist.co/";
                        const detailsToCopy = `${title.textContent}\n${date.textContent}\n${time.textContent}\n${timeZone.textContent}\n${userName.textContent}\n${nsfw.textContent}\n${roomCode.textContent}\n${description.textContent}\n${additionalText}\n${websiteURL}`;
                        navigator.clipboard.writeText(detailsToCopy).then(() => {
                            alert('Event details copied to clipboard!');
                        }).catch(err => {
                            console.error('Failed to copy: ', err);
                        });
                        e.stopPropagation(); // Prevent event bubbling
                    });

                    eventBox.appendChild(image);
                    eventBox.appendChild(title);
                    eventBox.appendChild(date);
                    eventBox.appendChild(time);
                    eventBox.appendChild(timeZone); // Add Time Zone to the event box
                    eventBox.appendChild(userName);
                    eventBox.appendChild(nsfw);
                    eventBox.appendChild(roomCode);
                    eventBox.appendChild(description);
                    eventBox.appendChild(copyButton); // Append copy button to event box
                    eventBox.addEventListener('click', () => {
                        description.classList.toggle('hidden');
                    });
                    eventContainer.appendChild(eventBox);
                });
            })
            .catch(error => console.error('Error fetching events:', error));
    };

    // Fetch and display events when the page loads
    fetchEvents();

    // Toggle visibility of NSFW events
    nsfwCheck.addEventListener('change', () => {
        const nsfwEvents = document.querySelectorAll('[data-nsfw="true"]');
        if (nsfwCheck.checked) {
            nsfwEvents.forEach(event => event.style.display = 'block');
        } else {
            nsfwEvents.forEach(event => event.style.display = 'none');
        }
    });
</script>
</body>
</html>