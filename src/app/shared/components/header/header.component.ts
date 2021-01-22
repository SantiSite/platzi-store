import { Component, OnInit } from '@angular/core';
import {map, shareReplay} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CartService } from '../../../core/service/cart/cart.service';
import { HideShowService } from '../../../core/service/hideShow/hide-show.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  total$: Observable<number>;
// Las varaibles con el signo $ al final dan a entender que son variables de flujos de datos de un observable

  constructor(
    private cartService: CartService,
    private hideShowService: HideShowService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.total$ = this.cartService.carrito$
      .pipe(
        map(products => products.length)
      ); // .subscribe(total => {
      //   console.log(total);
      //   this.total = total;
    // });
    //   .subscribe(products => {
    //   console.log(products);
    //   this.total = products.length;
    // });
  }

  ngOnInit(): void {
  }

  hideShow(): void {
    this.hideShowService.hideShowIn();
  }

  hideShowContainer(): void {
    this.hideShowService.hideShowContainerIn();
  }

  validation(event): void {
    this.hideShowService.validationIn(event);
  }

  hideShowUp(): void {
    this.hideShowService.hideShowUp();
  }

  hideShowContainerUp(): void {
    this.hideShowService.hideShowContainerUp();
  }

  validationUp(event): void {
    this.hideShowService.validationUp(event);
  }
}
