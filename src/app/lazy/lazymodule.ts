import { NgModule } from "@angular/core";
import { lazyroutingmodule } from "./lazyroutingmodule";
import { lazycomponent } from "./lazycomponent";
@NgModule({
    imports: [
        lazyroutingmodule
    ],
    declarations: [
        lazycomponent
    ]
})
export class LazyModule {
}
