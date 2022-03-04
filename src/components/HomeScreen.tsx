import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { render, StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";
import * as geolocation from '@nativescript/geolocation';
import { bind } from "@react-rxjs/core"
import { CoreTypes } from '@nativescript/core';
import { Observable, defer, from } from 'rxjs';
 
// $ est la nomenclature pour un observable, l'élément 1 est la valeur et le 2 un observateur qui peut se partager
const [GpsLocation, GpsLocation$] = bind(defer(() => from(geolocation.getCurrentLocation({ desiredAccuracy: CoreTypes.Accuracy.high, maximumAge: 5000, timeout: 5000 }))));

function GpsReader()
{  
    return (
        <label className="fas"
                style={styles.text}>
            GPS coordinat2e: {GpsLocation}
        </label>
    );
}

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

// Les valeurs qui actualise l'interface
type HomeScreenState = {
    GPSCoordinate: Location,
    Time: number,
}
export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState>
{
    constructor(props) {
        super(props);
    }

    RenderGpsReader() {
        return <GpsReader/>;
    }

    render() {
        return (
            <flexboxLayout style={styles.container}>
                <label
                    className="fas"
                    style={styles.text}
                >
                    &#xf135; Rise
                </label>
                <button
                    style={styles.button}
                    onTap={() => Dialogs.alert("Tapped!")}
                >
                    Tap me for an alert
                </button>
                {this.RenderGpsReader()}
            </flexboxLayout>
        );
    } 
}

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});