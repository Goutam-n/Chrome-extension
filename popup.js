
window.onload=function(){
    var mb = document.getElementById("func");
     console.log(mb);
    mb.addEventListener("click", converterScript);
}


function converterScript(){
    const userText = document.getElementById('inp').value;


          fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer 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'
          },
              body: JSON.stringify(
              {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": " " +userText+"convert in english"
                }]
              })
            })
             .then((response) => response.json())
             .then(response => {
             console.log(response);
             const text = response.choices[0].message.content;
             const textElement = document.getElementById('opt');
             textElement.value = text;
             })

          }
