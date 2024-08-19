const SWIRL_OPTS = {
    left: 0, top: 0,
    fill:           '#1a1a1a',
    duration:       'rand(600, 1000)',
    radius:         'rand(10, 20)',
    pathScale:      'rand(.5, 1)',
    swirlFrequency: 'rand(2,4)',
    swirlSize: 'rand(6,14)',
  }
  
  const swirl1 = new mojs.ShapeSwirl({
    ...SWIRL_OPTS
  });
    
  const swirl2 = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
    direction: -1
  });
  
  const swirl3 = new mojs.ShapeSwirl({
    ...SWIRL_OPTS
  });
    
  const swirl4 = new mojs.ShapeSwirl({
    ...SWIRL_OPTS
  });
  
  document.addEventListener('click', function (e) {
    const x = e.pageX,
          y = { [e.pageY]: e.pageY-150 };
    swirl1
      .tune({ x, y })
      .generate()
      .replay();
    
    swirl2
      .tune({ x, y })
      .generate()
      .replay();
    
    swirl3
      .tune({ x, y })
      .generate()
      .replay();
    
    swirl4
      .tune({ x, y })
      .generate()
      .replay();
    
  });
  