(() => {
  const base = 'https://tijan87.github.io/skynet-case-studies/assets/video/';
  const videos = {
    overview: {
      src: base + 'skynet-overview-v3-4k.mp4',
      poster: base + 'skynet-overview-v3-poster.webp',
      label: 'Product overview, 50 seconds',
      caption: 'The connected product, in 50 seconds.',
      summary: 'The platform brings research, execution and monitoring into one interface. It tracks signals and wallet activity, compares historical performance, supports strategy research, and connects automated trading to live position monitoring. Transaction timelines show the path from the incoming signal to the confirmed result.'
    },
    walkthrough: {
      src: base + 'skynet-full-walkthrough-v5.mp4',
      poster: base + 'skynet-full-walkthrough-v4-poster.webp',
      label: 'Full product walkthrough, 8 minutes 31 seconds',
      caption: 'Explore research, strategy configuration, execution and monitoring.',
      summary: 'The full walkthrough follows the working product in detail: research and historical performance, market context, strategy testing and position sizing, manual and automated execution, live positions, transaction timings, and vault controls. Trading demonstrations use the builder’s own capital.'
    }
  };
  const video = document.getElementById('product-video');
  const buttons = [...document.querySelectorAll('[data-video]')];
  const error = document.getElementById('video-error');
  buttons.forEach(button => button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    const selected = videos[button.dataset.video];
    video.pause();
    error.hidden = true;
    video.src = selected.src;
    video.poster = selected.poster;
    video.setAttribute('aria-label', selected.label);
    video.load();
    buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    document.getElementById('video-caption').textContent = selected.caption;
    document.getElementById('video-direct').href = selected.src;
    document.getElementById('video-summary-text').textContent = selected.summary;
  }));
  video.addEventListener('error', () => { error.hidden = false; });
  video.addEventListener('loadedmetadata', () => { error.hidden = true; });
})();
