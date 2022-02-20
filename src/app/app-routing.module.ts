import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {CrudComponent} from './views/product/crud/crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [{
  path:"", // home, quando não houver /alguma coisa ele carrega os componentes de home
  component: HomeComponent
},{
  path: "products",  // quando o usuario navegar para essa rota
  component: CrudComponent // irá carregar esse componente/tela

},{
  path:"products/create",
  component: ProductCreateComponent

},{
  path:"products/update/:id",
  component: ProductUpdateComponent
},{
  path:"products/delete/:id",
  component: ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
