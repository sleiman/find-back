function CoffeeTypes($scope) {
  $scope.coffees = [
     {name:'latte'},
    {name:'cappuccino'},
    {name:'espresso'},
   
  ];
  $scope.coffee = $scope.coffees[1]; // capp
  
  $scope.sizes = [
     {name:'smalll'},
    {name:'big'},
    {name:'massive'},
   
  ];
  $scope.size = $scope.sizes[1]; // big

  $scope.areas = [
    {name:'Downtown'},
    {name:'Mile End'},
    {name:'Plateau'},
   
  ];
  $scope.area = $scope.areas[1]; // mile end

  $scope.moods = [
    {name:'work'},
    {name:'read'},
    {name:'talk'},
   
  ];
  $scope.mood = $scope.moods[1]; // mile end



}

