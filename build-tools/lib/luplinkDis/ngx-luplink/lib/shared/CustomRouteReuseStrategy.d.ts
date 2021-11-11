import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
/**
 * Unused for now since RouteReuse does not goes well when with JSatOrb integration
 */
export declare class CustomRouteReuseStrategy implements RouteReuseStrategy {
    private storedRoutes;
    shouldDetach(route: ActivatedRouteSnapshot): boolean;
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void;
    shouldAttach(route: ActivatedRouteSnapshot): boolean;
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle;
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}
//# sourceMappingURL=CustomRouteReuseStrategy.d.ts.map