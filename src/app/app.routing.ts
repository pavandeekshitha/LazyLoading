import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { OrderDetailsComponent } from './products/order-details/order-details.component';
import { appcustompreloader } from './appcustompreloader';
const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'orders', component: OrderDetailsComponent},
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: "lazy",
        loadChildren: "./lazy/lazymodule#LazyModule",

        data: { preload: true }
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { preloadingStrategy: appcustompreloader });
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: appcustompreloader })
    ],
    providers: [appcustompreloader]
})
export class approuting { }