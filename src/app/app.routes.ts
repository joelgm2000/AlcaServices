import { Routes } from '@angular/router';
import { ImpuestoPredialUnificadoComponent } from '../EstatutoTributario022_2022/impuesto-predial-unificado/impuesto-predial-unificado.component';

export const routes: Routes = [
    { path: 'impuesto-predial-unificado', component: ImpuestoPredialUnificadoComponent },

    { path: '', redirectTo: 'impuesto-predial-unificado', pathMatch: 'full' } // Redirige a una ruta existente
];
