import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private storage: Storage,
    public navCtrl : NavController
    ) {
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  initializeApp(){
    this.storage.get('storage_xxx').then((res)=>{
      if (res==null) {
        this.navCtrl.navigateRoot('/login')
      } else {
        this.navCtrl.navigateRoot('/home')
      }
    });
  }
}
