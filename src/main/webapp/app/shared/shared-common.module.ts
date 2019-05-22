import { NgModule } from '@angular/core';

import { UiapplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [UiapplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [UiapplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class UiapplicationSharedCommonModule {}
