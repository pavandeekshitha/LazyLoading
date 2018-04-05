import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { lazycomponent } from "./lazycomponent";
const LazyRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "", redirectTo: "lazy", pathMatch: "full"
            },
            {
                path: "lazy",
                component: lazycomponent,
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(LazyRoutes)
    ]
})
export class lazyroutingmodule { }
