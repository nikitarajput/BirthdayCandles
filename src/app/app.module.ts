import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Album } from '../pages/album/album';
import { ChestToday } from '../pages/chest-today/chest-today';
import { CreateCake } from '../pages/create-cake/create-cake';
import { PhotoBooth } from '../pages/photo-booth/photo-booth';
import { Bdays } from '../pages/bdays/bdays';
import { MyCakes } from '../pages/album/my-cakes/my-cakes';
import { MyPhotos } from '../pages/album/my-photos/my-photos';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    Dashboard,
    Album,
    ChestToday,
    CreateCake,
    PhotoBooth,
    Bdays,
    MyCakes,
    MyPhotos
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    Dashboard,
    Album,
    ChestToday,
    CreateCake,
    PhotoBooth,
    Bdays,
    MyCakes,
    MyPhotos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
