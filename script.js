const triggerWebhook = async () => {
  try {
    const response = await fetch('http://136.52.77.136:4567/webhook', {
      mode: 'no-cors',
      method: 'POST',
      body: "{}",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('button').addEventListener('click', triggerWebhook);
