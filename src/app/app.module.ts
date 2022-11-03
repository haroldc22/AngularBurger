import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { BannerGridComponent } from './banner-grid/banner-grid.component';
import { MenuSliderComponent } from './menu-slider/menu-slider.component';
import { MobilComponent } from './mobil/mobil.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';
import { YandexMapComponent } from './yandex-map/yandex-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    EventsComponent,
    FooterComponent,
    BannerGridComponent,
    MenuSliderComponent,
    MobilComponent,
    ReservationComponent,
    ScrollUpComponent,
    YandexMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
