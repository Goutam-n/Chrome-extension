function converterScript()
{
      const userText = document.getElementById('textFromUser').value;
      console.log(userText);

      fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization' : YOUR API KEY
      },
          body: JSON.stringify(
          {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": " " +userText+" convert this text into english"
            }]
          })
        })
         .then((response) => response.json())
         .then(response => {
         const text = response.choices[0].message.content;
         const textElement = document.getElementById('output');
         textElement.value = text;
         console.log(text);
      })
}

