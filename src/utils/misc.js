export function scrollDown(px, stop) {
  if (document.documentElement.scrollTop >= stop) {
    scrollIntoView();
    return;
  }
  if (document.documentElement.scrollTop === 200) {
    // clouds.classList.add('b-takeoff__cluds--hidden');
  }
  setTimeout(function () {
    document.documentElement.scrollTop += px;
    scrollDown(px + 10, stop);
  }, 100);
}

export function countDown(el, time) {
  if (time < 0) return scrollDown(200, 600);
  setTimeout(() => {
    el.innerHTML = `${time.toString()}:00`;
    countDown(el, time - 1);
  }, 100);
}

function scrollIntoView() {
  const timeline = document.getElementById('timeline');
  const timelineTop = timeline.getBoundingClientRect().top;
  setTimeout(function () {
    window.scrollTo({
      top: timelineTop,
      left: 0,
      behavior: 'smooth',
    });
  }, 400);
}
