import { Component } from '@angular/core';

@Component({
  selector: 'app-grupos',
  standalone: false,
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {
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
}