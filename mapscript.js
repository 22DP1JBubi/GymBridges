function initMap() {
    // Создайте объект карты
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10, // Уровень масштабирования карты
      center: { lat: 56.95407174960792, lng: 24.0790048368174 } // Координаты центра карты 
    });

    // GYM! Latvia Imanta
    var marker = new google.maps.Marker({
      position: { lat: 56.957335952569, lng: 24.03638255128942 }, // Координаты места 
      map: map,
      title: 'GYM! Latvia Imanta' // Заголовок метки
    });

    // Lemon Gym Imanta
    var marker = new google.maps.Marker({
        position: { lat: 56.96011008953729, lng: 24.034244565966507 }, // Координаты места  
        map: map,
        title: 'Lemon Gym Imanta' // Заголовок метки
    });

    // MyFitness Imanta
    var marker = new google.maps.Marker({
        position: { lat: 56.96049712430333, lng: 24.01253163745811 }, // Координаты места  
        map: map,
        title: 'MyFitness Imanta' // Заголовок метки
    });

    // Gym! Riga Olimpia
    var marker = new google.maps.Marker({
        position: { lat: 56.94998545615211, lng: 24.082447642119416 }, // Координаты места   
        map: map,
        title: 'Gym! Riga Olimpia' // Заголовок метки
    });

    // MyFitness
    var marker = new google.maps.Marker({
        position: { lat: 56.94703617806939, lng: 24.118820868701736 }, // Координаты места
        map: map,
        title: 'MyFitness' // Заголовок метки
    });

    // Gym! Riga Origo
    var marker = new google.maps.Marker({
        position: { lat: 56.92804781964521, lng: 24.10127400699908 }, // Координаты места 
        map: map,
        title: 'Gym! Riga Origo' // Заголовок метки
    });
    
    // MyFitness Alfa
    var marker = new google.maps.Marker({
        position: { lat: 56.983929422364795, lng: 24.203755845935998 }, // Координаты места 
        map: map,
        title: 'MyFitness Alfa' // Заголовок метки
    });


    // Добавьте другие метки, используя аналогичный код
  }