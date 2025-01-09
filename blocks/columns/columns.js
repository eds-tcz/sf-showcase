export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
  document
    .querySelectorAll('a[href*="youtube.com/embed"]')
    .forEach((anchor) => {
      anchor.addEventListener('click', createVideoPopup);
    });
}

function createVideoPopup(event) {
    event.preventDefault(); // Prevent the default anchor click behavior

    const videoURL = event.currentTarget.getAttribute('href');
    if (!videoURL) return;

    // Create the popup container
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100vw';
    popupContainer.style.height = '100vh';
    popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popupContainer.style.display = 'flex';
    popupContainer.style.justifyContent = 'center';
    popupContainer.style.alignItems = 'center';
    popupContainer.style.zIndex = '1000';

    // Create the iframe for the video
    const iframeContainer = document.createElement('div');
    iframeContainer.style.height = "100%";
    const iframe = document.createElement('iframe');
    iframe.src = videoURL + '&autoplay=0'; // Append autoplay to the URL
    iframe.style.width = '1300px';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    // Close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '24px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => {
        document.body.removeChild(popupContainer);
    });

    // Append elements
    iframeContainer.appendChild(iframe);
    popupContainer.appendChild(iframeContainer);
    iframeContainer.appendChild(closeButton);
    document.body.appendChild(popupContainer);
}

// Attach the event to all anchor tags containing videos


