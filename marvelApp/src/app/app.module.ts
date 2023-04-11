import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ComicsComponent } from './component/comics/comics.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsService } from './services/comics.service';
import { CardModule } from 'primeng/card'
import { FieldsetModule } from 'primeng/fieldset'
import { ToolbarModule } from 'primeng/toolbar';
import { CreatorsComponent } from './component/creators/creators.component';
import { CharactersComponent } from './component/characters/characters.component';
import { EventsComponent } from './component/events/events.component';
import { ImageModule } from 'primeng/image';
import { ComicsInfoComponent } from './component/comics/comics-info/comics-info.component'

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    CreatorsComponent,
    CharactersComponent,
    EventsComponent,
    ComicsInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    FieldsetModule,
    ToolbarModule,
    ImageModule
  ],
  providers: [ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
