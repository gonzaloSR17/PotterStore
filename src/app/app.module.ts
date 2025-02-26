import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesWikiComponent } from './pages/pages-wiki/pages-wiki.component';
import { PagesWikiBookComponent } from './pages/pages-wiki-book/pages-wiki-book.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { provideHttpClient } from '@angular/common/http';
import { CardListBookComponent } from './component/card-list-book/card-list-book.component';
import { CardListMoviesComponent } from './component/card-list-movies/card-list-movies.component';
import { CardListPotionsComponent } from './component/card-list-potions/card-list-potions.component';
import { CardListSpellsComponent } from './component/card-list-spells/card-list-spells.component';  // Importar el nuevo método

import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLogginComponent } from './component/form-loggin/form-loggin.component';

//animaciones del toast

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { UserServiceService } from './services/user-service.service';
import { AuthService } from './services/auth.service';
import { FormPedidoComponent } from './component/form-pedido/form-pedido/form-pedido.component';
import { ListPedidoComponent } from './component/list-pedido/list-pedido/list-pedido.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesWikiComponent,
    PagesWikiBookComponent,
    CardListComponent,
    CardListBookComponent,
    CardListMoviesComponent,
    CardListPotionsComponent,
    CardListSpellsComponent,
    FormRegisterComponent,
    FormLogginComponent,
    FormPedidoComponent,
    ListPedidoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      easeTime: 500,  // Duración de la animación
      newestOnTop: true, 
      closeButton: true
    })
  ],
  providers: [

    provideHttpClient(),  // Reemplaza HttpClientModule por esto
    provideClientHydration(withEventReplay()),
    AuthService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
