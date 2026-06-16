import { Component } from '@angular/core';

@Component({
  selector: 'app-partidos',
  standalone: false,
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent {
  jornadaSeleccionada: number = 1;

  jornadas = [
    { numero: 1 },
    { numero: 2 },
    { numero: 3 }
  ];

  todosPartidos = [
    // ===== JORNADA 1 =====
    { fecha: 'Jue 11 Jun', hora: '15:00', grupo: 'A', local: 'México', localBandera: 'https://flagcdn.com/mx.svg', visitante: 'Sudáfrica', visitanteBandera: 'https://flagcdn.com/za.svg', sede: 'Estadio Azteca, CDMX', jornada: 1 },
    { fecha: 'Jue 11 Jun', hora: '22:00', grupo: 'A', local: 'Corea del Sur', localBandera: 'https://flagcdn.com/kr.svg', visitante: 'Chequia', visitanteBandera: 'https://flagcdn.com/cz.svg', sede: 'Estadio Guadalajara', jornada: 1 },
    { fecha: 'Vie 12 Jun', hora: '15:00', grupo: 'B', local: 'Canadá', localBandera: 'https://flagcdn.com/ca.svg', visitante: 'Bosnia y H.', visitanteBandera: 'https://flagcdn.com/ba.svg', sede: 'Estadio de Toronto', jornada: 1 },
    { fecha: 'Vie 12 Jun', hora: '21:00', grupo: 'D', local: 'Estados Unidos', localBandera: 'https://flagcdn.com/us.svg', visitante: 'Paraguay', visitanteBandera: 'https://flagcdn.com/py.svg', sede: 'SoFi Stadium, Los Ángeles', jornada: 1 },
    { fecha: 'Sáb 13 Jun', hora: '15:00', grupo: 'B', local: 'Catar', localBandera: 'https://flagcdn.com/qa.svg', visitante: 'Suiza', visitanteBandera: 'https://flagcdn.com/ch.svg', sede: "Levi's Stadium, San Francisco", jornada: 1 },
    { fecha: 'Sáb 13 Jun', hora: '18:00', grupo: 'C', local: 'Brasil', localBandera: 'https://flagcdn.com/br.svg', visitante: 'Marruecos', visitanteBandera: 'https://flagcdn.com/ma.svg', sede: 'MetLife Stadium, Nueva Jersey', jornada: 1 },
    { fecha: 'Sáb 13 Jun', hora: '21:00', grupo: 'C', local: 'Haití', localBandera: 'https://flagcdn.com/ht.svg', visitante: 'Escocia', visitanteBandera: 'https://flagcdn.com/gb-sct.svg', sede: 'Gillette Stadium, Boston', jornada: 1 },
    { fecha: 'Sáb 13 Jun', hora: '00:00*', grupo: 'D', local: 'Australia', localBandera: 'https://flagcdn.com/au.svg', visitante: 'Turquía', visitanteBandera: 'https://flagcdn.com/tr.svg', sede: 'BC Place, Vancouver', jornada: 1 },
    { fecha: 'Dom 14 Jun', hora: '13:00', grupo: 'E', local: 'Alemania', localBandera: 'https://flagcdn.com/de.svg', visitante: 'Curazao', visitanteBandera: 'https://flagcdn.com/cw.svg', sede: 'NRG Stadium, Houston', jornada: 1 },
    { fecha: 'Dom 14 Jun', hora: '16:00', grupo: 'F', local: 'Países Bajos', localBandera: 'https://flagcdn.com/nl.svg', visitante: 'Japón', visitanteBandera: 'https://flagcdn.com/jp.svg', sede: 'AT&T Stadium, Dallas', jornada: 1 },
    { fecha: 'Dom 14 Jun', hora: '19:00', grupo: 'E', local: 'Costa de Marfil', localBandera: 'https://flagcdn.com/ci.svg', visitante: 'Ecuador', visitanteBandera: 'https://flagcdn.com/ec.svg', sede: 'Lincoln Financial Field, Filadelfia', jornada: 1 },
    { fecha: 'Dom 14 Jun', hora: '22:00', grupo: 'F', local: 'Suecia', localBandera: 'https://flagcdn.com/se.svg', visitante: 'Túnez', visitanteBandera: 'https://flagcdn.com/tn.svg', sede: 'Estadio BBVA, Monterrey', jornada: 1 },
    { fecha: 'Lun 15 Jun', hora: '12:00', grupo: 'H', local: 'España', localBandera: 'https://flagcdn.com/es.svg', visitante: 'Cabo Verde', visitanteBandera: 'https://flagcdn.com/cv.svg', sede: 'Mercedes-Benz Stadium, Atlanta', jornada: 1 },
    { fecha: 'Lun 15 Jun', hora: '15:00', grupo: 'G', local: 'Bélgica', localBandera: 'https://flagcdn.com/be.svg', visitante: 'Egipto', visitanteBandera: 'https://flagcdn.com/eg.svg', sede: 'Lumen Field, Seattle', jornada: 1 },
    { fecha: 'Lun 15 Jun', hora: '18:00', grupo: 'H', local: 'Arabia Saudita', localBandera: 'https://flagcdn.com/sa.svg', visitante: 'Uruguay', visitanteBandera: 'https://flagcdn.com/uy.svg', sede: 'Hard Rock Stadium, Miami', jornada: 1 },
    { fecha: 'Lun 15 Jun', hora: '21:00', grupo: 'G', local: 'Irán', localBandera: 'https://flagcdn.com/ir.svg', visitante: 'Nueva Zelanda', visitanteBandera: 'https://flagcdn.com/nz.svg', sede: 'SoFi Stadium, Los Ángeles', jornada: 1 },
    { fecha: 'Mar 16 Jun', hora: '15:00', grupo: 'I', local: 'Francia', localBandera: 'https://flagcdn.com/fr.svg', visitante: 'Senegal', visitanteBandera: 'https://flagcdn.com/sn.svg', sede: 'MetLife Stadium, Nueva Jersey', jornada: 1 },
    { fecha: 'Mar 16 Jun', hora: '18:00', grupo: 'I', local: 'Irak', localBandera: 'https://flagcdn.com/iq.svg', visitante: 'Noruega', visitanteBandera: 'https://flagcdn.com/no.svg', sede: 'Gillette Stadium, Boston', jornada: 1 },
    { fecha: 'Mar 16 Jun', hora: '21:00', grupo: 'J', local: 'Argentina', localBandera: 'https://flagcdn.com/ar.svg', visitante: 'Argelia', visitanteBandera: 'https://flagcdn.com/dz.svg', sede: 'Arrowhead Stadium, Kansas City', jornada: 1 },
    { fecha: 'Mar 16 Jun', hora: '00:00*', grupo: 'J', local: 'Austria', localBandera: 'https://flagcdn.com/at.svg', visitante: 'Jordania', visitanteBandera: 'https://flagcdn.com/jo.svg', sede: "Levi's Stadium, San Francisco", jornada: 1 },
    { fecha: 'Mié 17 Jun', hora: '13:00', grupo: 'K', local: 'Portugal', localBandera: 'https://flagcdn.com/pt.svg', visitante: 'RD Congo', visitanteBandera: 'https://flagcdn.com/cd.svg', sede: 'NRG Stadium, Houston', jornada: 1 },
    { fecha: 'Mié 17 Jun', hora: '16:00', grupo: 'L', local: 'Inglaterra', localBandera: 'https://flagcdn.com/gb-eng.svg', visitante: 'Croacia', visitanteBandera: 'https://flagcdn.com/hr.svg', sede: 'AT&T Stadium, Dallas', jornada: 1 },
    { fecha: 'Mié 17 Jun', hora: '19:00', grupo: 'L', local: 'Ghana', localBandera: 'https://flagcdn.com/gh.svg', visitante: 'Panamá', visitanteBandera: 'https://flagcdn.com/pa.svg', sede: 'Estadio de Toronto', jornada: 1 },
    { fecha: 'Mié 17 Jun', hora: '22:00', grupo: 'K', local: 'Uzbekistán', localBandera: 'https://flagcdn.com/uz.svg', visitante: 'Colombia', visitanteBandera: 'https://flagcdn.com/co.svg', sede: 'Estadio Azteca, CDMX', jornada: 1 },

    // ===== JORNADA 2 =====
    { fecha: 'Jue 18 Jun', hora: '11:00', grupo: 'A', local: 'Chequia', localBandera: 'https://flagcdn.com/cz.svg', visitante: 'Sudáfrica', visitanteBandera: 'https://flagcdn.com/za.svg', sede: 'Mercedes-Benz Stadium, Atlanta', jornada: 2 },
    { fecha: 'Jue 18 Jun', hora: '14:00', grupo: 'B', local: 'Suiza', localBandera: 'https://flagcdn.com/ch.svg', visitante: 'Bosnia y H.', visitanteBandera: 'https://flagcdn.com/ba.svg', sede: 'Los Angeles Stadium', jornada: 2 },
    { fecha: 'Jue 18 Jun', hora: '17:00', grupo: 'B', local: 'Canadá', localBandera: 'https://flagcdn.com/ca.svg', visitante: 'Catar', visitanteBandera: 'https://flagcdn.com/qa.svg', sede: 'BC Place, Vancouver', jornada: 2 },
    { fecha: 'Jue 18 Jun', hora: '20:00', grupo: 'A', local: 'México', localBandera: 'https://flagcdn.com/mx.svg', visitante: 'Corea del Sur', visitanteBandera: 'https://flagcdn.com/kr.svg', sede: 'Estadio Guadalajara', jornada: 2 },
    { fecha: 'Vie 19 Jun', hora: '14:00', grupo: 'D', local: 'Estados Unidos', localBandera: 'https://flagcdn.com/us.svg', visitante: 'Australia', visitanteBandera: 'https://flagcdn.com/au.svg', sede: 'Lumen Field, Seattle', jornada: 2 },
    { fecha: 'Vie 19 Jun', hora: '14:00', grupo: 'C', local: 'Escocia', localBandera: 'https://flagcdn.com/gb-sct.svg', visitante: 'Marruecos', visitanteBandera: 'https://flagcdn.com/ma.svg', sede: 'Boston Stadium', jornada: 2 },
    { fecha: 'Vie 19 Jun', hora: '19:30', grupo: 'C', local: 'Brasil', localBandera: 'https://flagcdn.com/br.svg', visitante: 'Haití', visitanteBandera: 'https://flagcdn.com/ht.svg', sede: 'Philadelphia Stadium', jornada: 2 },
    { fecha: 'Vie 19 Jun', hora: '23:00', grupo: 'D', local: 'Turquía', localBandera: 'https://flagcdn.com/tr.svg', visitante: 'Paraguay', visitanteBandera: 'https://flagcdn.com/py.svg', sede: 'San Francisco Bay Area Stadium', jornada: 2 },
    { fecha: 'Sáb 20 Jun', hora: '12:00', grupo: 'E', local: 'Alemania', localBandera: 'https://flagcdn.com/de.svg', visitante: 'Costa de Marfil', visitanteBandera: 'https://flagcdn.com/ci.svg', sede: 'Toronto Stadium', jornada: 2 },
    { fecha: 'Sáb 20 Jun', hora: '15:00', grupo: 'F', local: 'Países Bajos', localBandera: 'https://flagcdn.com/nl.svg', visitante: 'Suecia', visitanteBandera: 'https://flagcdn.com/se.svg', sede: 'NRG Stadium, Houston', jornada: 2 },
    { fecha: 'Sáb 20 Jun', hora: '15:00', grupo: 'E', local: 'Ecuador', localBandera: 'https://flagcdn.com/ec.svg', visitante: 'Curazao', visitanteBandera: 'https://flagcdn.com/cw.svg', sede: 'Arrowhead Stadium, Kansas City', jornada: 2 },
    { fecha: 'Sáb 20 Jun', hora: '21:00', grupo: 'F', local: 'Túnez', localBandera: 'https://flagcdn.com/tn.svg', visitante: 'Japón', visitanteBandera: 'https://flagcdn.com/jp.svg', sede: 'Estadio Monterrey', jornada: 2 },
    { fecha: 'Dom 21 Jun', hora: '11:00', grupo: 'H', local: 'España', localBandera: 'https://flagcdn.com/es.svg', visitante: 'Arabia Saudita', visitanteBandera: 'https://flagcdn.com/sa.svg', sede: 'Mercedes-Benz Stadium, Atlanta', jornada: 2 },
    { fecha: 'Dom 21 Jun', hora: '15:00', grupo: 'G', local: 'Bélgica', localBandera: 'https://flagcdn.com/be.svg', visitante: 'Irán', visitanteBandera: 'https://flagcdn.com/ir.svg', sede: 'Los Angeles Stadium', jornada: 2 },
    { fecha: 'Dom 21 Jun', hora: '17:00', grupo: 'G', local: 'Nueva Zelanda', localBandera: 'https://flagcdn.com/nz.svg', visitante: 'Egipto', visitanteBandera: 'https://flagcdn.com/eg.svg', sede: 'BC Place, Vancouver', jornada: 2 },
    { fecha: 'Dom 21 Jun', hora: '20:00', grupo: 'H', local: 'Uruguay', localBandera: 'https://flagcdn.com/uy.svg', visitante: 'Cabo Verde', visitanteBandera: 'https://flagcdn.com/cv.svg', sede: 'Hard Rock Stadium, Miami', jornada: 2 },
    { fecha: 'Lun 22 Jun', hora: '13:00', grupo: 'I', local: 'Francia', localBandera: 'https://flagcdn.com/fr.svg', visitante: 'Irak', visitanteBandera: 'https://flagcdn.com/iq.svg', sede: 'Philadelphia Stadium', jornada: 2 },
    { fecha: 'Lun 22 Jun', hora: '16:00', grupo: 'J', local: 'Argentina', localBandera: 'https://flagcdn.com/ar.svg', visitante: 'Austria', visitanteBandera: 'https://flagcdn.com/at.svg', sede: 'AT&T Stadium, Dallas', jornada: 2 },
    { fecha: 'Lun 22 Jun', hora: '18:00', grupo: 'I', local: 'Noruega', localBandera: 'https://flagcdn.com/no.svg', visitante: 'Senegal', visitanteBandera: 'https://flagcdn.com/sn.svg', sede: 'MetLife Stadium, Nueva Jersey', jornada: 2 },
    { fecha: 'Lun 22 Jun', hora: '21:00', grupo: 'J', local: 'Jordania', localBandera: 'https://flagcdn.com/jo.svg', visitante: 'Argelia', visitanteBandera: 'https://flagcdn.com/dz.svg', sede: 'San Francisco Bay Area Stadium', jornada: 2 },
    { fecha: 'Mar 23 Jun', hora: '14:00', grupo: 'L', local: 'Panamá', localBandera: 'https://flagcdn.com/pa.svg', visitante: 'Croacia', visitanteBandera: 'https://flagcdn.com/hr.svg', sede: 'Toronto Stadium', jornada: 2 },
    { fecha: 'Mar 23 Jun', hora: '15:00', grupo: 'K', local: 'Portugal', localBandera: 'https://flagcdn.com/pt.svg', visitante: 'Uzbekistán', visitanteBandera: 'https://flagcdn.com/uz.svg', sede: 'NRG Stadium, Houston', jornada: 2 },
    { fecha: 'Mar 23 Jun', hora: '18:00', grupo: 'L', local: 'Inglaterra', localBandera: 'https://flagcdn.com/gb-eng.svg', visitante: 'Ghana', visitanteBandera: 'https://flagcdn.com/gh.svg', sede: 'Boston Stadium', jornada: 2 },
    { fecha: 'Mar 23 Jun', hora: '21:00', grupo: 'K', local: 'Colombia', localBandera: 'https://flagcdn.com/co.svg', visitante: 'RD Congo', visitanteBandera: 'https://flagcdn.com/cd.svg', sede: 'Estadio Guadalajara', jornada: 2 },

    // ===== JORNADA 3 =====
    { fecha: 'Mié 24 Jun', hora: '14:00', grupo: 'B', local: 'Suiza', localBandera: 'https://flagcdn.com/ch.svg', visitante: 'Canadá', visitanteBandera: 'https://flagcdn.com/ca.svg', sede: 'BC Place Vancouver', jornada: 3 },
    { fecha: 'Mié 24 Jun', hora: '14:00', grupo: 'B', local: 'Bosnia y H.', localBandera: 'https://flagcdn.com/ba.svg', visitante: 'Catar', visitanteBandera: 'https://flagcdn.com/qa.svg', sede: 'Seattle Stadium', jornada: 3 },
    { fecha: 'Mié 24 Jun', hora: '17:00', grupo: 'C', local: 'Escocia', localBandera: 'https://flagcdn.com/gb-sct.svg', visitante: 'Brasil', visitanteBandera: 'https://flagcdn.com/br.svg', sede: 'Miami Stadium', jornada: 3 },
    { fecha: 'Mié 24 Jun', hora: '17:00', grupo: 'C', local: 'Marruecos', localBandera: 'https://flagcdn.com/ma.svg', visitante: 'Haití', visitanteBandera: 'https://flagcdn.com/ht.svg', sede: 'Atlanta Stadium', jornada: 3 },
    { fecha: 'Mié 24 Jun', hora: '20:00', grupo: 'A', local: 'Sudáfrica', localBandera: 'https://flagcdn.com/za.svg', visitante: 'Corea del Sur', visitanteBandera: 'https://flagcdn.com/kr.svg', sede: 'Estadio Monterrey', jornada: 3 },
    { fecha: 'Mié 24 Jun', hora: '20:00', grupo: 'A', local: 'Chequia', localBandera: 'https://flagcdn.com/cz.svg', visitante: 'México', visitanteBandera: 'https://flagcdn.com/mx.svg', sede: 'Mexico City Stadium', jornada: 3 },
    { fecha: 'Jue 25 Jun', hora: '15:00', grupo: 'E', local: 'Ecuador', localBandera: 'https://flagcdn.com/ec.svg', visitante: 'Alemania', visitanteBandera: 'https://flagcdn.com/de.svg', sede: 'New York New Jersey Stadium', jornada: 3 },
    { fecha: 'Jue 25 Jun', hora: '15:00', grupo: 'E', local: 'Curazao', localBandera: 'https://flagcdn.com/cw.svg', visitante: 'Costa de Marfil', visitanteBandera: 'https://flagcdn.com/ci.svg', sede: 'Philadelphia Stadium', jornada: 3 },
    { fecha: 'Jue 25 Jun', hora: '18:00', grupo: 'F', local: 'Japón', localBandera: 'https://flagcdn.com/jp.svg', visitante: 'Suecia', visitanteBandera: 'https://flagcdn.com/se.svg', sede: 'Dallas Stadium', jornada: 3 },
    { fecha: 'Jue 25 Jun', hora: '18:00', grupo: 'F', local: 'Túnez', localBandera: 'https://flagcdn.com/tn.svg', visitante: 'Países Bajos', visitanteBandera: 'https://flagcdn.com/nl.svg', sede: 'Kansas City Stadium', jornada: 3 },
    { fecha: 'Jue 25 Jun', hora: '21:00', grupo: 'D', local: 'Turquía', localBandera: 'https://flagcdn.com/tr.svg', visitante: 'Estados Unidos', visitanteBandera: 'https://flagcdn.com/us.svg', sede: 'Los Angeles Stadium', jornada: 3 },
    { fecha: 'Jue 25 Jun', hora: '21:00', grupo: 'D', local: 'Paraguay', localBandera: 'https://flagcdn.com/py.svg', visitante: 'Australia', visitanteBandera: 'https://flagcdn.com/au.svg', sede: 'San Francisco Bay Area Stadium', jornada: 3 },
    { fecha: 'Vie 26 Jun', hora: '14:00', grupo: 'I', local: 'Noruega', localBandera: 'https://flagcdn.com/no.svg', visitante: 'Francia', visitanteBandera: 'https://flagcdn.com/fr.svg', sede: 'Boston Stadium', jornada: 3 },
    { fecha: 'Vie 26 Jun', hora: '14:00', grupo: 'I', local: 'Senegal', localBandera: 'https://flagcdn.com/sn.svg', visitante: 'Irak', visitanteBandera: 'https://flagcdn.com/iq.svg', sede: 'Toronto Stadium', jornada: 3 },
    { fecha: 'Vie 26 Jun', hora: '19:00', grupo: 'H', local: 'Uruguay', localBandera: 'https://flagcdn.com/uy.svg', visitante: 'España', visitanteBandera: 'https://flagcdn.com/es.svg', sede: 'Estadio Guadalajara', jornada: 3 },
    { fecha: 'Vie 26 Jun', hora: '19:00', grupo: 'H', local: 'Cabo Verde', localBandera: 'https://flagcdn.com/cv.svg', visitante: 'Arabia Saudita', visitanteBandera: 'https://flagcdn.com/sa.svg', sede: 'Houston Stadium', jornada: 3 },
    { fecha: 'Vie 26 Jun', hora: '22:00', grupo: 'G', local: 'Egipto', localBandera: 'https://flagcdn.com/eg.svg', visitante: 'Irán', visitanteBandera: 'https://flagcdn.com/ir.svg', sede: 'Seattle Stadium', jornada: 3 },
    { fecha: 'Vie 26 Jun', hora: '22:00', grupo: 'G', local: 'Nueva Zelanda', localBandera: 'https://flagcdn.com/nz.svg', visitante: 'Bélgica', visitanteBandera: 'https://flagcdn.com/be.svg', sede: 'BC Place Vancouver', jornada: 3 },
    { fecha: 'Sáb 27 Jun', hora: '16:00', grupo: 'L', local: 'Panamá', localBandera: 'https://flagcdn.com/pa.svg', visitante: 'Inglaterra', visitanteBandera: 'https://flagcdn.com/gb-eng.svg', sede: 'New York New Jersey Stadium', jornada: 3 },
    { fecha: 'Sáb 27 Jun', hora: '16:00', grupo: 'L', local: 'Croacia', localBandera: 'https://flagcdn.com/hr.svg', visitante: 'Ghana', visitanteBandera: 'https://flagcdn.com/gh.svg', sede: 'Philadelphia Stadium', jornada: 3 },
    { fecha: 'Sáb 27 Jun', hora: '18:30', grupo: 'K', local: 'Colombia', localBandera: 'https://flagcdn.com/co.svg', visitante: 'Portugal', visitanteBandera: 'https://flagcdn.com/pt.svg', sede: 'Miami Stadium', jornada: 3 },
    { fecha: 'Sáb 27 Jun', hora: '18:30', grupo: 'K', local: 'RD Congo', localBandera: 'https://flagcdn.com/cd.svg', visitante: 'Uzbekistán', visitanteBandera: 'https://flagcdn.com/uz.svg', sede: 'Atlanta Stadium', jornada: 3 },
    { fecha: 'Sáb 27 Jun', hora: '21:00', grupo: 'J', local: 'Argelia', localBandera: 'https://flagcdn.com/dz.svg', visitante: 'Austria', visitanteBandera: 'https://flagcdn.com/at.svg', sede: 'Kansas City Stadium', jornada: 3 },
    { fecha: 'Sáb 27 Jun', hora: '21:00', grupo: 'J', local: 'Jordania', localBandera: 'https://flagcdn.com/jo.svg', visitante: 'Argentina', visitanteBandera: 'https://flagcdn.com/ar.svg', sede: 'Dallas Stadium', jornada: 3 }
  ];

  get partidosFiltrados() {
    return this.todosPartidos.filter(p => p.jornada === this.jornadaSeleccionada);
  }

  seleccionarJornada(numero: number) {
    this.jornadaSeleccionada = numero;
  }
}