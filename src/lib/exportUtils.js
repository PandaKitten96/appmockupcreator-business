import html2canvas from 'html2canvas'

export const exportMockup = async (canvasElement, format = 'png', scale = 2) => {
  try {
    const canvas = await html2canvas(canvasElement, {
      scale: scale,
      backgroundColor: null,
      logging: false
    })

    const link = document.createElement('a')
    link.href = canvas.toDataURL(`image/${format}`)
    link.download = `mockup-${new Date().getTime()}.${format}`
    link.click()

    return true
  } catch (error) {
    console.error('Export failed:', error)
    return false
  }
}

export const shareProject = (mockup) => {
  if (navigator.share) {
    navigator.share({
      title: mockup.title,
      text: mockup.subtitle,
      url: window.location.href
    })
  }
}

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Copy failed:', error)
    return false
  }
}
