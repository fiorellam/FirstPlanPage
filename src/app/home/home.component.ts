import { Component, OnInit } from '@angular/core';


import { CareerViewModel } from 'src/app/models/career-view-model';
import { ServiceDBService }  from 'src/app/services/service-db.service'; 
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  title = 'FirstPlanAngular';

  ngOnInit(){
    this.loadCareers();
  }

  constructor(private careerService: ServiceDBService,
  private sanitizer: DomSanitizer){
    
  }

  careers : CareerViewModel[] = [];
  loadCareers(){
    this.careerService.getCareers().subscribe(response => {
      this.careers = [];
      response.docs.forEach( value => {
        const data = value.data();
        const id = value.id;
        const career : CareerViewModel = {
          id: id,
          autor: data.autor,
          color: data.color,
          descripcion: data.descripcion,
          imagen: data.imagen,
          nombre: data.nombre,
          texto: data.texto,
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(data.videoUrl)
          
        };
        this.careers.push(career);
        
      })
    })

  }
  

}
