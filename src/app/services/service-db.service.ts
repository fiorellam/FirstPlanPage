import { Injectable } from '@angular/core';
import { Career } from 'src/app/models/career';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CareerViewModel } from 'src/app/models/career-view-model' ;

@Injectable({
  providedIn: 'root'
})
export class ServiceDBService {

  constructor(private db: AngularFirestore) { }

  private careerCollectionName = "carreras";

  getCareers(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<Career>(this.careerCollectionName).get();
  }
}
