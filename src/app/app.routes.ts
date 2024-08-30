import { Routes } from '@angular/router';
import { ImpuestoPredialUnificadoComponent } from '../EstatutoTributario022_2022/impuesto-predial-unificado/impuesto-predial-unificado.component';
import { ImpuestoDeIndustriaYComercioComponent } from '../EstatutoTributario022_2022/impuesto-de-industria-ycomercio/impuesto-de-industria-ycomercio.component';

export const routes: Routes = [
    { path: 'impuesto-predial-unificado', component: ImpuestoPredialUnificadoComponent },
    { path: 'impuesto-ica', component: ImpuestoDeIndustriaYComercioComponent },
    { path: '', redirectTo: 'impuesto-predial-unificado', pathMatch: 'full' } // Redirige a una ruta existente
];
