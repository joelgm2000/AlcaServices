import { Routes } from '@angular/router';
import { ImpuestoPredialUnificadoComponent } from '../EstatutoTributario022_2022/impuesto-predial-unificado/impuesto-predial-unificado.component';
import { ImpuestoIndustriaYComercioComponent } from '../EstatutoTributario022_2022/impuesto-industria-ycomercio/impuesto-industria-ycomercio.component';

export const routes: Routes = [
    { path: 'impuesto-predial-unificado', component: ImpuestoPredialUnificadoComponent },
    { path: 'impuesto-industria-y-comercio', component: ImpuestoIndustriaYComercioComponent },


    { path: '', redirectTo: 'impuesto-predial-unificado', pathMatch: 'full' } // Redirige a una ruta existente
];
