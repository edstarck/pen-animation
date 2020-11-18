$(document).ready(function () {
  TweenMax.set('.part3', { y: -572 });

  var bodyToStart = TweenMax.to('.part3', 1, { y: 0, ease: Linear.easeNone });

  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    offset: 287,
    duration: 572,
  })
    .setTween(bodyToStart)
    .addTo(controller);

  TweenMax.set('.part6', { y: -846 });

  TweenMax.set('.part5', { y: -726 }); /* 120 - 846 */
  TweenMax.set('.part4', { y: -557 }); /* 289 - 846 */

  var p6ToStart = new TweenMax.to('.part6', 1, { y: 0, ease: Linear.easeNone });

  new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    duration: 846,
    offset: 1250,
  })
    .setTween(p6ToStart)
    .addTo(controller);

  var p5ToStart = new TweenMax.to('.part5', 1, { y: 0, ease: Linear.easeNone });

  new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    duration: 726,
    offset: 1250,
  })
    .setTween(p5ToStart)
    .addTo(controller);

  var p4ToStart = new TweenMax.to('.part4', 1, { y: 0, ease: Linear.easeNone });

  new ScrollMagic.Scene({
    triggerElement: '.part1',
    triggerHook: 1,
    duration: 557,
    offset: 1250,
  })
    .setTween(p4ToStart)
    .addTo(controller);

  $('.parts li').each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.55,
    })
      .setClassToggle(this, 'fade-in')
      .addTo(controller);
  });
});
