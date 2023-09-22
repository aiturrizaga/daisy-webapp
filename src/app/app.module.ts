import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlowerComponent } from './flower/flower.component';
import { ConsoleComponent } from './console/console.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeartPulseComponent } from './shared/components/heart-pulse/heart-pulse.component';
import { MessageHeaderComponent } from './shared/components/message-header/message-header.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlowerComponent,
    ConsoleComponent,
    HeartPulseComponent,
    MessageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
