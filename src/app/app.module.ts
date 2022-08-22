import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPokemonLevelPipe } from './pipes/filter-pokemon-level.pipe';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonListComponent,
    HomeComponent,
    PokemonComponent,
    ShortenPipe,
    FilterPokemonLevelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
