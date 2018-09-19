import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

export interface CanDeactivateComponent {
    canDeactivate(): Observable<boolean>;
  }
  
  @Injectable({ providedIn: 'root' })
  export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
  
    canDeactivate(
      component: CanDeactivateComponent,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): Observable<boolean> {
  
      return component.canDeactivate();
  
    }
  
  }