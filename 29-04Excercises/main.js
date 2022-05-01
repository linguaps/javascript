var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    }
  ];

  for(i = 0; i < books.length; i++){
      let p = document.createElement("p");    
  }
  p.innerHTML = `<p>${books.title} :  ${books.author} </p>`
    console.log("p");


