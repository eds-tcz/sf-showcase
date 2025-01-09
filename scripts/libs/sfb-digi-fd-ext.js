// Function to move data, replace the last <p> tag, and delete rs-content-wrapper
function replaceAndCleanup() {
  // Select the required elements
  const digiMainBody = document.querySelector('.digi-main-body');
  const rsContentWrapper = document.querySelector('.rs-content-wrapper');
  const rsContent = document.querySelector('.rs-content');

  if (!digiMainBody || !rsContentWrapper || !rsContent) {
    console.error('Required elements are missing.');
    return;
  }

  // Get the last <p> tag inside digi-main-body
  const pTags = digiMainBody.querySelectorAll('p');
  const lastPTag = pTags[pTags.length - 1];

  if (!lastPTag) {
    console.error('No <p> tags found inside digi-main-body.');
    return;
  }

  // Create a new div with the class 'rs-body'
  const rsBody = document.createElement('div');
  rsBody.className = 'rs-body';

  // Move all content from rs-content into the new rs-body div
  rsBody.innerHTML = rsContent.innerHTML;

  // Replace the last <p> tag with the new rs-body div
  digiMainBody.replaceChild(rsBody, lastPTag);

  // Delete the rs-content-wrapper div
  rsContentWrapper.remove();

  console.log('Operation completed successfully.');
}

// Run the function
replaceAndCleanup();
