import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

/**
 * Unused for now since RouteReuse does not goes well when with JSatOrb integration
 */
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<String, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log(`detach ${route.url}`);
    return true; // TODO: Store all routes for now, to correct
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (route != null) {
      this.storedRoutes.set(route.routeConfig!.path!, handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log(`attach ${route.url}`);
    return !!route.routeConfig && !!this.storedRoutes.get(route.routeConfig.path!);// Not clean
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.storedRoutes.get(route.routeConfig!.path!)!;// Not clean
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log(`reuse ${curr.url} -> ${future.url}`);
    return future.routeConfig === curr.routeConfig && !curr.data.noReuse;
  }
}
