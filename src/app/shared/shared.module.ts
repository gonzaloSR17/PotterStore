import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarCarritoComponent } from './components/sidebars/sidebar-carrito/sidebar-carrito.component';
import { SidebarMenuComponent } from './components/sidebars/sidebar-menu/sidebar-menu.component';

@NgModule({
    declarations: [
      // Declara el componente
      NavbarComponent,
      SidebarCarritoComponent,
      SidebarMenuComponent
    ],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [
      // Exporta el componente
      NavbarComponent,
      SidebarMenuComponent,
      SidebarCarritoComponent
    ]
  })
  
  export class SharedModule { }
  