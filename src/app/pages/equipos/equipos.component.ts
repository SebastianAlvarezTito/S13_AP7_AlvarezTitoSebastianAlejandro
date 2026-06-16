import { Component } from '@angular/core';

@Component({
  selector: 'app-equipos',
  standalone: false,
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  grupoSeleccionado: string = 'A';

  grupos = [
    { letra: 'A' }, { letra: 'B' }, { letra: 'C' }, { letra: 'D' },
    { letra: 'E' }, { letra: 'F' }, { letra: 'G' }, { letra: 'H' },
    { letra: 'I' }, { letra: 'J' }, { letra: 'K' }, { letra: 'L' }
  ];

  todosEquipos = [
    // Grupo A
    { nombre: 'México', bandera: 'https://flagcdn.com/mx.svg', grupo: 'A' },
    { nombre: 'Sudáfrica', bandera: 'https://flagcdn.com/za.svg', grupo: 'A' },
    { nombre: 'Corea del Sur', bandera: 'https://flagcdn.com/kr.svg', grupo: 'A' },
    { nombre: 'Chequia', bandera: 'https://flagcdn.com/cz.svg', grupo: 'A' },
    // Grupo B
    { nombre: 'Canadá', bandera: 'https://flagcdn.com/ca.svg', grupo: 'B' },
    { nombre: 'Bosnia y H.', bandera: 'https://flagcdn.com/ba.svg', grupo: 'B' },
    { nombre: 'Catar', bandera: 'https://flagcdn.com/qa.svg', grupo: 'B' },
    { nombre: 'Suiza', bandera: 'https://flagcdn.com/ch.svg', grupo: 'B' },
    // Grupo C
    { nombre: 'Brasil', bandera: 'https://flagcdn.com/br.svg', grupo: 'C' },
    { nombre: 'Marruecos', bandera: 'https://flagcdn.com/ma.svg', grupo: 'C' },
    { nombre: 'Haití', bandera: 'https://flagcdn.com/ht.svg', grupo: 'C' },
    { nombre: 'Escocia', bandera: 'https://flagcdn.com/gb-sct.svg', grupo: 'C' },
    // Grupo D
    { nombre: 'Estados Unidos', bandera: 'https://flagcdn.com/us.svg', grupo: 'D' },
    { nombre: 'Paraguay', bandera: 'https://flagcdn.com/py.svg', grupo: 'D' },
    { nombre: 'Australia', bandera: 'https://flagcdn.com/au.svg', grupo: 'D' },
    { nombre: 'Turquía', bandera: 'https://flagcdn.com/tr.svg', grupo: 'D' },
    // Grupo E
    { nombre: 'Alemania', bandera: 'https://flagcdn.com/de.svg', grupo: 'E' },
    { nombre: 'Curazao', bandera: 'https://flagcdn.com/cw.svg', grupo: 'E' },
    { nombre: 'Costa de Marfil', bandera: 'https://flagcdn.com/ci.svg', grupo: 'E' },
    { nombre: 'Ecuador', bandera: 'https://flagcdn.com/ec.svg', grupo: 'E' },
    // Grupo F
    { nombre: 'Países Bajos', bandera: 'https://flagcdn.com/nl.svg', grupo: 'F' },
    { nombre: 'Japón', bandera: 'https://flagcdn.com/jp.svg', grupo: 'F' },
    { nombre: 'Suecia', bandera: 'https://flagcdn.com/se.svg', grupo: 'F' },
    { nombre: 'Túnez', bandera: 'https://flagcdn.com/tn.svg', grupo: 'F' },
    // Grupo G
    { nombre: 'Bélgica', bandera: 'https://flagcdn.com/be.svg', grupo: 'G' },
    { nombre: 'Egipto', bandera: 'https://flagcdn.com/eg.svg', grupo: 'G' },
    { nombre: 'Irán', bandera: 'https://flagcdn.com/ir.svg', grupo: 'G' },
    { nombre: 'Nueva Zelanda', bandera: 'https://flagcdn.com/nz.svg', grupo: 'G' },
    // Grupo H
    { nombre: 'España', bandera: 'https://flagcdn.com/es.svg', grupo: 'H' },
    { nombre: 'Cabo Verde', bandera: 'https://flagcdn.com/cv.svg', grupo: 'H' },
    { nombre: 'Arabia Saudita', bandera: 'https://flagcdn.com/sa.svg', grupo: 'H' },
    { nombre: 'Uruguay', bandera: 'https://flagcdn.com/uy.svg', grupo: 'H' },
    // Grupo I
    { nombre: 'Francia', bandera: 'https://flagcdn.com/fr.svg', grupo: 'I' },
    { nombre: 'Senegal', bandera: 'https://flagcdn.com/sn.svg', grupo: 'I' },
    { nombre: 'Irak', bandera: 'https://flagcdn.com/iq.svg', grupo: 'I' },
    { nombre: 'Noruega', bandera: 'https://flagcdn.com/no.svg', grupo: 'I' },
    // Grupo J
    { nombre: 'Argentina', bandera: 'https://flagcdn.com/ar.svg', grupo: 'J' },
    { nombre: 'Argelia', bandera: 'https://flagcdn.com/dz.svg', grupo: 'J' },
    { nombre: 'Austria', bandera: 'https://flagcdn.com/at.svg', grupo: 'J' },
    { nombre: 'Jordania', bandera: 'https://flagcdn.com/jo.svg', grupo: 'J' },
    // Grupo K
    { nombre: 'Portugal', bandera: 'https://flagcdn.com/pt.svg', grupo: 'K' },
    { nombre: 'RD Congo', bandera: 'https://flagcdn.com/cd.svg', grupo: 'K' },
    { nombre: 'Uzbekistán', bandera: 'https://flagcdn.com/uz.svg', grupo: 'K' },
    { nombre: 'Colombia', bandera: 'https://flagcdn.com/co.svg', grupo: 'K' },
    // Grupo L
    { nombre: 'Inglaterra', bandera: 'https://flagcdn.com/gb-eng.svg', grupo: 'L' },
    { nombre: 'Croacia', bandera: 'https://flagcdn.com/hr.svg', grupo: 'L' },
    { nombre: 'Ghana', bandera: 'https://flagcdn.com/gh.svg', grupo: 'L' },
    { nombre: 'Panamá', bandera: 'https://flagcdn.com/pa.svg', grupo: 'L' }
  ];

  get equiposFiltrados() {
    return this.todosEquipos.filter(e => e.grupo === this.grupoSeleccionado);
  }

  seleccionarGrupo(letra: string) {
    this.grupoSeleccionado = letra;
  }
}