document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
          title: formData.get('title'),
          description: formData.get('description'),
          creator_id: 1,
          status: 'ativo',
          event_date: formData.get('event_date')
        };
  
        const response = await fetch('/events', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          window.location.href = '/events';
        } else {
          alert('Erro ao cadastrar evento');
        }
      });
    }
  });
  