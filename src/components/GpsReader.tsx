import * as React from "react";
import * as geolocation from '@nativescript/geolocation';
import { bind } from "@react-rxjs/core"
import { CoreTypes } from '@nativescript/core';
import { Observable, defer, from } from 'rxjs';
 

export class GpsReader extends React.Component
{
    
    // $ est la nomenclature pour un observable, l'élément 1 est la valeur et le 2 un observateur qui peut se partager
    GpsLocation$: [() => geolocation.Location, Observable<geolocation.Location>];

    constructor(props) {
        super(props);
        this.GpsLocation$ = bind(defer(() => from(geolocation.getCurrentLocation({ desiredAccuracy: CoreTypes.Accuracy.high, maximumAge: 5000, timeout: 5000 }))));
    }
    
    render() {
        return (
            <label className="fas"
                    style={styles.text}>
                GPS coordinate: {this.GpsLocation$[0]}
            </label>
        );
    }
}