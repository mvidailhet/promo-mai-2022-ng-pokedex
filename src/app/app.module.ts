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
import { HttpClientModule } from '@angular/common/http';

import localeFr from '@angular/common/locales/fr';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPokemonLevelPipe } from './pipes/filter-pokemon-level.pipe';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonListComponent,
    HomeComponent,
    PokemonComponent,
    ShortenPipe,
    FilterPokemonLevelPipe,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
