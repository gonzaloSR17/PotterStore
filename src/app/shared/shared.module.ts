import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarCarritoComponent } from './components/sidebars/sidebar-carrito/sidebar-carrito.component';
import { SidebarMenuComponent } from './components/sidebars/sidebar-menu/sidebar-menu.component';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
      // Declara el componente
      NavbarComponent,
      SidebarCarritoComponent,
      SidebarMenuComponent,
      FooterComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule
    ],
    exports: [
      // Exporta el componente
      NavbarComponent,
      SidebarMenuComponent,
      FooterComponent,
      SidebarCarritoComponent
    ]
  })
  
  export class SharedModule { }
  