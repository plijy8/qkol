  
    function init() {
    
        var mapOptions1 = {
        zoom: 16,
        scrollwheel: false,
        center: new google.maps.LatLng(53.115759, 46.604854), // Kuzneck
            styles: [{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"on"}]}]
        };

        var mapOptions2 = {
        zoom: 16,
        scrollwheel: false,
        center: new google.maps.LatLng(53.196752, 45.009749), // Penza
            styles: [{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"on"}]}]
        };

        var kuzneck = document.getElementById('map');
        var map = new google.maps.Map(kuzneck, mapOptions1);
        var markerKuzneck = new google.maps.Marker({
            position: new google.maps.LatLng(53.115759, 46.604854),
            map: map,
            title: 'Кузнецк!'
        });

        var penza = document.getElementById('map1');
        var mapPenza = new google.maps.Map(penza, mapOptions2);
        var markerPenza = new google.maps.Marker({
            position: new google.maps.LatLng(53.196752, 45.009749),
            map: mapPenza,
            title: 'Пенза!'
        });


    }