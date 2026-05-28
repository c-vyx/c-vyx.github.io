document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-switcher')?.addEventListener('change', e => {
        fetch('/api/language', { method: 'POST', body: `lang=${e.target.value}`, headers: {'Content-Type':'application/x-www-form-urlencoded'} })
            .then(() => location.reload());
    });
    document.getElementById('theme-switcher')?.addEventListener('change', e => {
        fetch('/api/theme', { method: 'POST', body: `theme=${e.target.value}` })
            .then(() => location.reload());
    });
    document.getElementById('view-switcher')?.addEventListener('change', e => {
        fetch('/api/view', { method: 'POST', body: `view=${e.target.value}` })
            .then(() => location.reload());
    });
});