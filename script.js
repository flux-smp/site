<script>
  function copyIP() {
    navigator.clipboard.writeText('play.fluxsmp.net').then(() => {
      const btn = document.querySelector('.copy-btn');
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = 'Copy IP', 2000);
    });
  }
