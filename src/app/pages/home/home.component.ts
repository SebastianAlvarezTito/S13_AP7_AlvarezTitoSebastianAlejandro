import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // ===== TODOS LOS 12 GRUPOS COMPLETOS CON BANDERAS FUNCIONALES =====
  grupos = [
    {
      letra: 'A',
      equipos: [
        { nombre: 'México', bandera: 'https://flagcdn.com/mx.svg' },
        { nombre: 'Sudáfrica', bandera: 'https://flagcdn.com/za.svg' },
        { nombre: 'Corea del Sur', bandera: 'https://flagcdn.com/kr.svg' },
        { nombre: 'Chequia', bandera: 'https://flagcdn.com/cz.svg' }
      ]
    },
    {
      letra: 'B',
      equipos: [
        { nombre: 'Canadá', bandera: 'https://flagcdn.com/ca.svg' },
        { nombre: 'Bosnia y H.', bandera: 'https://flagcdn.com/ba.svg' },
        { nombre: 'Catar', bandera: 'https://flagcdn.com/qa.svg' },
        { nombre: 'Suiza', bandera: 'https://flagcdn.com/ch.svg' }
      ]
    },
    {
      letra: 'C',
      equipos: [
        { nombre: 'Brasil', bandera: 'https://flagcdn.com/br.svg' },
        { nombre: 'Marruecos', bandera: 'https://flagcdn.com/ma.svg' },
        { nombre: 'Haití', bandera: 'https://flagcdn.com/ht.svg' },
        { nombre: 'Escocia', bandera: 'https://flagcdn.com/gb-sct.svg' }
      ]
    },
    {
      letra: 'D',
      equipos: [
        { nombre: 'Estados Unidos', bandera: 'https://flagcdn.com/us.svg' },
        { nombre: 'Paraguay', bandera: 'https://flagcdn.com/py.svg' },
        { nombre: 'Australia', bandera: 'https://flagcdn.com/au.svg' },
        { nombre: 'Turquía', bandera: 'https://flagcdn.com/tr.svg' }
      ]
    },
    {
      letra: 'E',
      equipos: [
        { nombre: 'Alemania', bandera: 'https://flagcdn.com/de.svg' },
        { nombre: 'Curazao', bandera: 'https://flagcdn.com/cw.svg' },
        { nombre: 'Costa de Marfil', bandera: 'https://flagcdn.com/ci.svg' },
        { nombre: 'Ecuador', bandera: 'https://flagcdn.com/ec.svg' }
      ]
    },
    {
      letra: 'F',
      equipos: [
        { nombre: 'Países Bajos', bandera: 'https://flagcdn.com/nl.svg' },
        { nombre: 'Japón', bandera: 'https://flagcdn.com/jp.svg' },
        { nombre: 'Suecia', bandera: 'https://flagcdn.com/se.svg' },
        { nombre: 'Túnez', bandera: 'https://flagcdn.com/tn.svg' }
      ]
    },
    {
      letra: 'G',
      equipos: [
        { nombre: 'Bélgica', bandera: 'https://flagcdn.com/be.svg' },
        { nombre: 'Egipto', bandera: 'https://flagcdn.com/eg.svg' },
        { nombre: 'Irán', bandera: 'https://flagcdn.com/ir.svg' },
        { nombre: 'Nueva Zelanda', bandera: 'https://flagcdn.com/nz.svg' }
      ]
    },
    {
      letra: 'H',
      equipos: [
        { nombre: 'España', bandera: 'https://flagcdn.com/es.svg' },
        { nombre: 'Cabo Verde', bandera: 'https://flagcdn.com/cv.svg' },
        { nombre: 'Arabia Saudita', bandera: 'https://flagcdn.com/sa.svg' },
        { nombre: 'Uruguay', bandera: 'https://flagcdn.com/uy.svg' }
      ]
    },
    {
      letra: 'I',
      equipos: [
        { nombre: 'Francia', bandera: 'https://flagcdn.com/fr.svg' },
        { nombre: 'Senegal', bandera: 'https://flagcdn.com/sn.svg' },
        { nombre: 'Irak', bandera: 'https://flagcdn.com/iq.svg' },
        { nombre: 'Noruega', bandera: 'https://flagcdn.com/no.svg' }
      ]
    },
    {
      letra: 'J',
      equipos: [
        { nombre: 'Argentina', bandera: 'https://flagcdn.com/ar.svg' },
        { nombre: 'Argelia', bandera: 'https://flagcdn.com/dz.svg' },
        { nombre: 'Austria', bandera: 'https://flagcdn.com/at.svg' },
        { nombre: 'Jordania', bandera: 'https://flagcdn.com/jo.svg' }
      ]
    },
    {
      letra: 'K',
      equipos: [
        { nombre: 'Portugal', bandera: 'https://flagcdn.com/pt.svg' },
        { nombre: 'RD Congo', bandera: 'https://flagcdn.com/cd.svg' },
        { nombre: 'Uzbekistán', bandera: 'https://flagcdn.com/uz.svg' },
        { nombre: 'Colombia', bandera: 'https://flagcdn.com/co.svg' }
      ]
    },
    {
      letra: 'L',
      equipos: [
        { nombre: 'Inglaterra', bandera: 'https://flagcdn.com/gb-eng.svg' },
        { nombre: 'Croacia', bandera: 'https://flagcdn.com/hr.svg' },
        { nombre: 'Ghana', bandera: 'https://flagcdn.com/gh.svg' },
        { nombre: 'Panamá', bandera: 'https://flagcdn.com/pa.svg' }
      ]
    }
  ];

  // ===== DATOS ESTADÍSTICOS DESTACADOS =====
  datosDestacados = [
    {
      icono: '🏆',
      titulo: '48 Selecciones',
      descripcion: 'Máximo histórico de participantes en un Mundial'
    },
    {
      icono: '⚽',
      titulo: '104 Partidos',
      descripcion: 'La edición con más encuentros de la historia'
    },
    {
      icono: '🗓️',
      titulo: '11 Jun - 19 Jul',
      descripcion: '38 días de pura emoción futbolística'
    },
    {
      icono: '🌎',
      titulo: '3 Países Sedes',
      descripcion: 'Canadá • EE.UU. • México'
    },
    {
      icono: '🏟️',
      titulo: '16 Estadios',
      descripcion: 'Distribuidos en las 3 naciones anfitrionas'
    },
    {
      icono: '🎫',
      titulo: '3.2M Entradas',
      descripcion: 'Disponibles para los aficionados de todo el mundo'
    }
  ];

  // ===== PARTIDOS DESTACADOS CON BANDERAS FUNCIONALES =====
  partidosDestacados = [
    {
      fecha: 'Jue 11 Jun',
      hora: '15:00',
      local: 'México',
      localBandera: 'https://flagcdn.com/mx.svg',
      visitante: 'Sudáfrica',
      visitanteBandera: 'https://flagcdn.com/za.svg',
      sede: 'Estadio Azteca, CDMX'
    },
    {
      fecha: 'Sáb 13 Jun',
      hora: '18:00',
      local: 'Brasil',
      localBandera: 'https://flagcdn.com/br.svg',
      visitante: 'Marruecos',
      visitanteBandera: 'https://flagcdn.com/ma.svg',
      sede: 'MetLife Stadium, Nueva Jersey'
    },
    {
      fecha: 'Mar 16 Jun',
      hora: '21:00',
      local: 'Argentina',
      localBandera: 'https://flagcdn.com/ar.svg',
      visitante: 'Argelia',
      visitanteBandera: 'https://flagcdn.com/dz.svg',
      sede: 'Arrowhead Stadium, Kansas City'
    },
    {
      fecha: 'Mié 17 Jun',
      hora: '16:00',
      local: 'Inglaterra',
      localBandera: 'https://flagcdn.com/gb-eng.svg',
      visitante: 'Croacia',
      visitanteBandera: 'https://flagcdn.com/hr.svg',
      sede: 'AT&T Stadium, Dallas'
    }
  ];
}