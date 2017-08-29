var classApp=angular.module("app",[]);
  
  classApp.controller('controller1',
function($scope){
  
 $scope.test1={
   heading: "Walter White",
subheading:"The name you know , the person you don't-Heisenburg" ,

   label:'Introduction of the prinicipal character:',
info:"Walter Hartwell White Sr., also known by his clandestine alias Heisenberg, is a fictional character and the main protagonist of Breaking Bad. He is portrayed by Bryan Cranston. A graduate of the California Institute of Technology, Walt was once a promising chemist who cofounded the company Gray Matter Technologies with his close friend Elliot Schwartz and his then-girlfriend Gretchen. He left Gray Matter abruptly, selling his shares for $5,000; soon afterward, the company made a fortune, much of it from his research. Walt subsequently moved to Albuquerque, New Mexico, where he became a high school chemistry teacher. Breaking Bad begins on Walter's 50th birthday, when he is diagnosed with Stage IIIA lung cancer. After this discovery, he resorts to manufacturing methamphetamine and drug dealing to ensure his family's financial security after his death. He is pulled deeper into the illicit drug trade, becoming more and more ruthless as the series progresses, and later adopts the alias Heisenberg, which becomes recognizable as the kingpin figure in the local drug trade. Series creator Vince Gilligan has described his goal with Walter White as turning Mr. Chips into Scarface, and deliberately made the character less sympathetic over the course of the series. Walt's evolution from mild-mannered school teacher and family man to ruthless criminal mastermind and murderer is the show's central focus.",
   imgURL:"http://vignette2.wikia.nocookie.net/breakingbad/images/8/88/WalterWhite.png/revision/latest?cb=20140712163255&path-prefix=de",
subheading3:" Great quotes by Walter White aka Heisenburg:"
 
 };
  
  
$scope.quotes=[{
  
  quote:"-We’re done when I say we’re done"},
  
                  
                
                {quote:"-You’re goddamn right"},
              
               {quote:"-It’s over. I won"
               },
               {quote:"-Stay out of my territory"}];

                 
});