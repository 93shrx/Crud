import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // importamos o pacote de rotas

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private router: Router) { } //dissemos que irá receber um arg tipo router

  ngOnInit(): void {
  }

  navigateToProductCreate():void{
    this.router.navigate(['products/create']) //... para assim podermos usar o método navigate e direcionar

  }
}
