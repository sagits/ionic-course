import { Injectable } from '@angular/core';
import { from, Observable, of, } from 'rxjs';
import { AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsFirebaseService {

  constructor(public firestore: AngularFirestore) {

  }

  getAll(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection('products').snapshotChanges().pipe(map(actions => {

      // this.loadingProvider.dismiss();

      const objects = actions.map(action => {
        const data = action.payload.doc.data() as any;
        const id = action.payload.doc.id;
        return { id, ...data };
      });

      return objects;
    }));
  }

  add(_document_) {
    let _id = _document_.id || this.firestore.createId();
    this.firestore.doc('products/' + _id)
      .set(_document_)
      .catch(function (error) {
        console.error("Error persistDocument", error);
        throw error;
      })

    let newObject = {
      ..._document_,
      id: _id
    };

    return of(newObject);
  }

  edit(_document_) {
    return this.add(_document_);
  }

  getById(_id_): Observable<any> {

    return from(this.firestore.doc('products/' + _id_).ref.get().then(function (_doc_) {

      return _doc_.exists ? {id: _doc_.id, ...(_doc_.data() as any)} : null;
    }));

  }
}
