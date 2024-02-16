const openURL = (url: string) => {
  const newWindow: Window = window.open();
  newWindow.opener = null;
  newWindow.location = url;
}

export default openURL
