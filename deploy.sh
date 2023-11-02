#!/bin/bash
echo "Lancement de la commande NG Build"
ng build --configuration production
firebase deploy --only hosting:toma_grafik
