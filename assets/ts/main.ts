document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const data = params.get('data');
  if (data) {
    const dataParsed = JSON.parse(atob(data));
    for (const key in dataParsed) {
      const element = document.getElementById(key);
      if (element) {
        element.innerHTML = dataParsed[key];
      }
    }
  }

  let mouseOneMe: number;
  const me = document.getElementById('me') as HTMLImageElement;
  me.addEventListener('mouseenter', () => {
    console.log(me.src);
    mouseOneMe = setInterval(() => {
      me.src = me.src.replace('me.png', 'me_cringe.png');
    }, 3000);
  });

  me.addEventListener('mouseleave', () => {
    clearInterval(mouseOneMe);
    me.src = me.src.replace('me_cringe.png', 'me.png');
  });
});
