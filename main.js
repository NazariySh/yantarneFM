            document.querySelector('.audio-wire-1').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-2').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-3').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-4').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-5').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-6').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-7').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-8').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-9').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-10').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-11').style.animationPlayState = 'paused';     
            document.querySelector('.audio-wire-12').style.animationPlayState = 'paused';         
            document.querySelector('.audio-wire-13').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-14').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-15').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-16').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-17').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-18').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-19').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-20').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-21').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-22').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-23').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-24').style.animationPlayState = 'paused';                       
            document.querySelector('.audio-wire-25').style.animationPlayState = 'paused';

fetch('https://c28.radioboss.fm/api/info/346?key=EZMN16CV3BV0')
            .then(response => {
                return (response.json());
            })
            .then(data => {
                console.log(data);
            });
          

       
            
            let btnStart = document.querySelector('#btn-start');
            let btnStop = document.querySelector('#btn-stop');
            let audio = document.querySelector('#player');
           
          
            btnStart.onclick = ()=>{
                document.getElementById('player').play();
                btnStart.style.display = "none";
                btnStop.style.display = "block";
                
            document.querySelector('.audio-wire-1').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-2').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-3').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-4').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-5').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-6').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-7').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-8').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-9').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-10').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-11').style.animationPlayState = 'running';     
            document.querySelector('.audio-wire-12').style.animationPlayState = 'running';         
            document.querySelector('.audio-wire-13').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-14').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-15').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-16').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-17').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-18').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-19').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-20').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-21').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-22').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-23').style.animationPlayState = 'running';
            document.querySelector('.audio-wire-24').style.animationPlayState = 'running';                       
            document.querySelector('.audio-wire-25').style.animationPlayState = 'running';
              


            }
            btnStop.onclick = () =>{
                document.getElementById('player').pause()

                btnStart.style.display = "block";
                btnStop.style.display = "none";

               
            document.querySelector('.audio-wire-1').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-2').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-3').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-4').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-5').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-6').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-7').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-8').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-9').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-10').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-11').style.animationPlayState = 'paused';     
            document.querySelector('.audio-wire-12').style.animationPlayState = 'paused';         
            document.querySelector('.audio-wire-13').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-14').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-15').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-16').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-17').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-18').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-19').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-20').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-21').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-22').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-23').style.animationPlayState = 'paused';
            document.querySelector('.audio-wire-24').style.animationPlayState = 'paused';                       
            document.querySelector('.audio-wire-25').style.animationPlayState = 'paused';
          


          
               
            };

         

            