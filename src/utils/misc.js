export function scrollDown(px, stop, ref) {
  if (!ref) return;
  const element = ref;
  if (document.documentElement.scrollTop >= stop) {
    scrollIntoView(element);
    return;
  }
  if (document.documentElement.scrollTop === 200) {
    // clouds.classList.add('b-takeoff__cluds--hidden');
  }
  setTimeout(function () {
    document.documentElement.scrollTop += px;
    scrollDown(px + 10, stop, element);
  }, 100);
}

export function countDown(el, time) {
  if (time < 0) return scrollDown(200, 600);
  setTimeout(() => {
    el.innerHTML = `0${time.toString()}:00`;
    countDown(el, time - 1);
  }, 1000);
}

function scrollIntoView(ref) {
  const timeline = ref;
  const timelineTop = timeline.getBoundingClientRect().top;
  setTimeout(function () {
    window.scrollTo({
      top: timelineTop + timelineTop * 0.4,
      left: 0,
      behavior: 'smooth',
    });
  }, 400);
}
