$(() => {

  
  let $list, $newItemForm, $newItemButton;
  let item = '';                                 
  $list = $('ul');                               
  $newItemForm = $('#newItemForm');              
  $newItemButton = $('#newItemButton');          

  $('li').hide().each(function(index) {          
    $(this).delay(450 * index).fadeIn(1600);     
  });

  
  function updateCount() {                       
    const items = $('li[class!=complete]').length; 
    $('#counter').text(items);                   
  }
  updateCount();                                 

  
  $newItemButton.show();                         
  $newItemForm.hide();                           
  $('#showForm').on('click', () => {        
    $newItemButton.hide();                       
    $newItemForm.show();                         
  });

  
  $newItemForm.on('submit', e => {       
    e.preventDefault();                         
    const text = $('input:text').val();           
    $list.append(`<li>${text}</li>`);      
    $('input:text').val('');                    
    updateCount();                              
  });

  
  $list.on('click', 'li', function() {
    const $this = $(this);               
    const complete = $this.hasClass('complete');  

    if (complete === true) {           
      $this.animate({                  
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', () => {    
        $this.remove();                
      });
    } else {                           
      item = $this.text();             
      $this.remove();                  
      $list                            
        .append(`<li class="complete">${item}</li>`)
        .hide().fadeIn(300);           
      updateCount();                   
    }                                 
  });                                  

});