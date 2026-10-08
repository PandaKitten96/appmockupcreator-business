export const DEVICES = {
  iphone: {
    name: 'iPhone 14 Pro',
    width: 390,
    height: 844,
    radius: '52px',
    bezels: 'notch'
  },
  iphoneSE: {
    name: 'iPhone SE',
    width: 375,
    height: 667,
    radius: '28px',
    bezels: 'home'
  },
  ipadPro: {
    name: 'iPad Pro',
    width: 1024,
    height: 1366,
    radius: '20px',
    bezels: 'flat'
  },
  android: {
    name: 'Android Phone',
    width: 412,
    height: 915,
    radius: '45px',
    bezels: 'flat'
  },
  desktop: {
    name: 'Desktop',
    width: 1920,
    height: 1080,
    radius: '0px',
    bezels: 'flat'
  }
}

export const getDeviceDimensions = (device) => {
  const d = DEVICES[device]
  return {
    width: d.width,
    height: d.height,
    borderRadius: d.radius,
    aspectRatio: d.width / d.height
  }
}
