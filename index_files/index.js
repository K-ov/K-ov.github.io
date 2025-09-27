fetch('https://api.github.com/repos/K-ov/LaunchTracker/releases')
    .then(res => res.json())
    .then(data => {
        let total = 0;
        data.forEach(release => {
            release.assets.forEach(asset => {
                total += asset.download_count;
            });
        });
        
        // Create animated counter effect
        const downloadsElement = document.getElementById('downloads');
        const formattedTotal = formatNumber(total);
        
        // Add special styling for the number
        downloadsElement.innerHTML = `Total Downloads: <span class="download-number">${formattedTotal}</span>`;
        
        // Add a subtle animation when the number loads
        downloadsElement.style.opacity = '0';
        setTimeout(() => {
            downloadsElement.style.transition = 'opacity 0.8s ease';
            downloadsElement.style.opacity = '1';
        }, 100);
    })
    .catch(error => {
        console.error('Error fetching download stats:', error);
        document.getElementById('downloads').innerHTML = 'Total Downloads: <span style="color: #ff6b6b;">Unable to load</span>';
    });

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// Always scroll to top on page load/reload
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});

window.addEventListener('load', function() {
  setTimeout(function() {
      window.scrollTo(0, 0);
  }, 0);
});

// Also scroll to top immediately
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Initialize VANTA background effect
if (typeof VANTA !== 'undefined') {
  VANTA.HALO({
      el: "#vantajs",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      size: 1.20,
      amplitudeFactor: 6.90,
      baseColor: 0x75,
  });
}