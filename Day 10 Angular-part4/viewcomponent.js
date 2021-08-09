angular.module('app', [])
  .component('viewComponent', {
      template:`
        <div> 
          <div id='to-container'>
            <ul id='recipents' >
              <li ng-repeat='contact in $ctrl.selectedContacts track by $index'>
                  <button ng-click='$ctrl.removeContact($index)'>x {{contact.name}}</button>
              </li>
            </ul>
          </div>
          <contact-list
              on-update='$ctrl.onUpdate(contact)'
          ></contact-list>
        </div>

      `,
      controller: function(){
        var self = this;
        self.selectedContacts = [];
        
        self.removeContact = function(index){
          self.selectedContacts.splice(index, 1)
        }
        
        self.onUpdate = function(contact){
           try{
             self.selectedContacts.push(contact);
           }catch(err){
             console.log(err);
           }
        }
      }
   })
  .component('contactList', {
      template:`
        <div id='contact-list'>
          <ul ng-repeat='contact in $ctrl.addressBook'>
            <li>{{contact.name}}</li>
            <button ng-click='$ctrl.updateSelected(contact)'>Add Contact</button>
          </ul>
        </div>
      `,
      bindings:{
        onUpdate : '&'
      },
      controller:function(){
        var self = this;
        
        self.updateSelected = function(contact){
          self.onUpdate({contact:contact});
        }
        
        self.addressBook = [
          {name:'dave'},
          {name:'fred'},
          {name:'jim'},
          {name:'bob'},
          {name:'earl'}
        ]
      }
  })