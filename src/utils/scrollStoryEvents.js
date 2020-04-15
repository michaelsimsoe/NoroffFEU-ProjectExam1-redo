export function scrollPercent(progressIndicator) {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  if (scrolled < 98) {
    progressIndicator.style.display = 'block';
    progressIndicator.innerHTML = Math.floor(scrolled) + '%';
  }

  if (scrolled > 50 && scrolled < 60) {
    progressIndicator.innerHTML = 'Half way to Mars!';
  }

  if (scrolled > 90) {
    progressIndicator.innerHTML = 'Landing...';
  }
  if (scrolled === 100) {
    progressIndicator.style.display = 'none';
  }
}

export function scrollStoryClouds(domRefs) {
  const mediaQuery770 = window.matchMedia('(min-width: 770px)');
  const scrollTop = document.documentElement.scrollTop;
  let moveValue;
  let scaleValue = scrollTop / 100;
  if (mediaQuery770.matches) {
    scaleValue = scrollTop / 10;
    moveValue = -40 + Math.floor(scrollTop * 5);
    if (scaleValue > 7) scaleValue = 7;
    if (moveValue > 1100) moveValue = 1100;
    domRefs.clouds.style.transform = `translate(-50%,${moveValue}%) scale(${
      1 + Number(scaleValue)
    })`;
  } else {
    scaleValue = scrollTop / 10;
    moveValue = -40 + Math.floor(scrollTop * 5);
    if (scaleValue > 6) scaleValue = 6;
    if (moveValue > 1000) moveValue = 1000;
    domRefs.clouds.style.transform = `translate(-50%,${moveValue}%) scale(${
      1 + Number(scaleValue)
    })`;
  }

  if (mediaQuery770.matches) {
    if (scrollTop > 1200) {
      domRefs.clouds.classList.add('b-takeoff__cluds--hidden');
    } else {
      domRefs.clouds.classList.remove('b-takeoff__cluds--hidden');
    }
  } else {
    if (scrollTop > 340) {
      domRefs.clouds.classList.add('b-takeoff__cluds--hidden');
    } else {
      domRefs.clouds.classList.remove('b-takeoff__cluds--hidden');
    }
  }

  if (scrollTop > 11) {
    domRefs.subheading.style.display = 'none';
  } else {
    domRefs.subheading.style.display = 'block';
  }
}

export function scrollStoryHeader(domRefs) {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 11) {
    domRefs.logo.classList.remove('b-header__main-logo--intro');
    domRefs.header.classList.remove('b-header--intro');
  } else {
    domRefs.logo.classList.add('b-header__main-logo--intro');
    domRefs.header.classList.add('b-header--intro');
  }
}

export function scrollStoryMobileMenu(domRefs) {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 11) {
    domRefs.mobileMenu.classList.remove('b-mobile--init');
    domRefs.mobileMenuInitLogo.classList.remove(
      'b-mobile-menu__main-logo--init'
    );
    domRefs.activeMobileLink.classList.remove('b-mobile--init');
  } else {
    domRefs.mobileMenu.classList.add('b-mobile--init');
    domRefs.mobileMenuInitLogo.classList.add('b-mobile-menu__main-logo--init');
    domRefs.activeMobileLink.classList.add('b-mobile--init');
  }
}

export function scrollStoryLaunchControll(domRefs) {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 11) {
    domRefs.launchControll.style.display = 'none';
  } else {
    domRefs.launchControll.style.display = 'grid';
  }
}

export function scrollStoryTakeoffRocket(domRefs) {
  const scrollTop = document.documentElement.scrollTop;
  const mediaQuery770 = window.matchMedia('(min-width: 770px)');

  if (mediaQuery770.matches) {
    if (scrollTop > 90) {
      domRefs.groundRocket.classList.add('b-takeoff__rocket-launched--hidden');
      domRefs.launchedRocket.classList.remove(
        'b-takeoff__rocket-launched--hidden'
      );
    } else {
      domRefs.groundRocket.classList.remove(
        'b-takeoff__rocket-launched--hidden'
      );
      domRefs.launchedRocket.classList.add(
        'b-takeoff__rocket-launched--hidden'
      );
    }
  } else {
    if (scrollTop > 70) {
      domRefs.groundRocket.classList.add('b-takeoff__rocket-launched--hidden');
      domRefs.launchedRocket.classList.remove(
        'b-takeoff__rocket-launched--hidden'
      );
    } else {
      domRefs.groundRocket.classList.remove(
        'b-takeoff__rocket-launched--hidden'
      );
      domRefs.launchedRocket.classList.add(
        'b-takeoff__rocket-launched--hidden'
      );
    }
  }
}

export function displayPercentage(domRefs) {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addRocket();
          domRefs.progress.classList.remove('progress--hidden');
        } else {
          domRefs.timeLineRocket.classList // .getElementById('timeline-rocket')
            .add('b-timeline__rocket--hidden');
          domRefs.progress.classList.add('progress--hidden');
        }
      });
    },
    {
      rootMargin: '0px 0px -50% 0px',
    }
  );
  observer.observe(domRefs.timeline); //document.querySelector('#timeline'));

  /*
   * Removes the hidden class from the rocket
   */
  function addRocket() {
    domRefs.timeLineRocket.classList //   .getElementById('timeline-rocket') // document
      .remove('b-timeline__rocket--hidden');
  }
}
