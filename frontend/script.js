// Replace after deploy with your real API URL printed by Serverless
const API_BASE = 'https://REPLACE_ME.execute-api.us-east-1.amazonaws.com/hello';

(async () => {
  const el = document.getElementById('lambda-response');
  try {
    const res = await fetch(API_BASE);
    const json = await res.json();
    el.textContent = json.message || JSON.stringify(json);
  } catch (e) {
    el.textContent = 'Error calling API: ' + e;
  }
})();
