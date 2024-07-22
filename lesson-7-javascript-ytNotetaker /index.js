document.addEventListener('DOMContentLoaded', function () {

    // Selectors 
    let videoPlayer = document.querySelector('#video-player');
    let videoUrl = document.querySelector('#video-url');
    let watchButton = document.querySelector('#watch-button');

    let noteInput = document.querySelector('#note');
    let saveButton = document.querySelector('#save-button');
    let notesList = document.querySelector('#notes-list');
    let noNotesText = document.querySelector('#no-notes-text');



    // Event Listening
    saveButton.addEventListener('click', function () {

        let note = noteInput.value;

        if (note !== '') {

            // Manipulation
            let noteItem = document.createElement('li');
            noteItem.textContent = note;
            noteItem.classList.add('bg-gray-100', 'p-2', 'mt-2'); 
            notesList.appendChild(noteItem);

            noteInput.value = '';
            noNotesText.style.display = 'none';
        }


    });

    function extractVideoId(url) {
        //https://www.youtube.com/watch?v=s86-Z-CbaHA&t=8s&ab_channel=Vsauce
        return url.split('v=')[1].substring(0, 11);
    }

    watchButton.addEventListener('click', function () {

        let url = videoUrl.value;

        if (url !== '') {

            // Embed url: https://www.youtube.com/embed/s86-Z-CbaHA?si=_C-ui-DKDczEO91g
            let videoID = extractVideoId(url);
            videoPlayer.src  = 'https://www.youtube.com/embed/' + videoID;
            videoPlayer.classList.remove('h-0');
            videoPlayer.classList.add('h-[200px]', 'md:h-[400px]', 'w-full');
            videoUrl.value = '';
        }

    });

});