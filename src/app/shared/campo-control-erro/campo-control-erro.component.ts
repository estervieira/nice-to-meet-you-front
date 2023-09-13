import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.scss']
})
export class CampoControlErroComponent {
  @Input() msgErro: string | undefined;
  @Input() mostrarErro: boolean | undefined;
}
