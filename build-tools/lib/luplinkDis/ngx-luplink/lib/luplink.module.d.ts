import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "./components/card/card.module";
import * as i4 from "@angular/common/http";
import * as i5 from "ngx-nanospace-client-lib";
interface LuplinkConfig {
    defaultForm: any;
    environment: any;
    isStandalone?: boolean;
}
export declare class LuplinkModule {
    static forRoot(config: LuplinkConfig): ModuleWithProviders<LuplinkModule>;
    static ɵfac: i0.ɵɵFactoryDef<LuplinkModule, never>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<LuplinkModule, never, [typeof i1.CommonModule, typeof i2.FormsModule, typeof i3.CardModule, typeof i4.HttpClientModule, typeof i5.NgxNanospaceClientLibModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<LuplinkModule>;
}
export {};
//# sourceMappingURL=luplink.module.d.ts.map