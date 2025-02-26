import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './component/card-list/card-list.component';
import { CardListMoviesComponent } from './component/card-list-movies/card-list-movies.component';
import { CardListBookComponent } from './component/card-list-book/card-list-book.component';
import { CardListPotionsComponent } from './component/card-list-potions/card-list-potions.component';
import { CardListSpellsComponent } from './component/card-list-spells/card-list-spells.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { FormLogginComponent } from './component/form-loggin/form-loggin.component';
import { FormPedidoComponent } from './component/form-pedido/form-pedido/form-pedido.component';
import { ListPedidoComponent } from './component/list-pedido/list-pedido/list-pedido.component';

// Declaracion rutas

const routes: Routes = [

  { path: '',component: CardListComponent, pathMatch: 'full'},
  { path: 'loggin', component: FormLogginComponent},
  { path: 'register', component: FormRegisterComponent},
  { path: 'wiki/movies', component: CardListMoviesComponent},
  { path: 'wiki/book', component: CardListBookComponent},
  { path: 'wiki/potions', component: CardListPotionsComponent},
  { path: 'wiki/spells', component: CardListSpellsComponent},
  { path: 'pedido', component: FormPedidoComponent},
  { path: 'list/pedidos', component: ListPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
